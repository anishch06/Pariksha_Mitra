const express = require('express');
const router = express.Router();
const { StudentPerformance, TestPerformance } = require('./feedback_schemas.js'); // Import schemas
// POST Route to Analyze Performance and Save Results
router.post('/analyzePerformance', async (req, res) => {
  try {
    //  Save Student Data
    const studentsData = req.body; // Assume body contains an array of student data
    await StudentPerformance.insertMany(studentsData);

    //  Fetch all student data
    const students = await StudentPerformance.find();

    //  Analyze Chapter Performance
    const studentsByChapter = {};
    students.forEach((student) => {
      student.tests.forEach((test) => {
        test.chapterPerformance.forEach((chapter) => {
          const chapterId = chapter.chapterId;
          if (!studentsByChapter[chapterId]) {
            studentsByChapter[chapterId] = [];
          }
          studentsByChapter[chapterId].push({
            score: test.score,
            correctAnswers: chapter.chapter_correctAnswers,
            incorrectAnswers: chapter.chapter_incorrectAnswers,
            unattemptedQuestions: chapter.chapter_unattemptedQuestions,
          });
        });
      });
    });

    const chapterAnalysis = Object.keys(studentsByChapter).map((chapterId) => {
      const students = studentsByChapter[chapterId];
      const totalScore = students.reduce((acc, s) => acc + s.score, 0);
      const totalCorrect = students.reduce((acc, s) => acc + s.correctAnswers, 0);
      const totalIncorrect = students.reduce((acc, s) => acc + s.incorrectAnswers, 0);
      const totalUnattempted = students.reduce((acc, s) => acc + s.unattemptedQuestions, 0);

      return {
        chapterId,
        averageScore: totalScore / students.length,
        averageCorrect: totalCorrect / students.length,
        averageIncorrect: totalIncorrect / students.length,
        averageUnattempted: totalUnattempted / students.length,
      };
    });

    // Identify Weak Chapters
    const weakChapters = chapterAnalysis.filter((chapter) => {
      return (
        chapter.averageScore < 70 || // Example threshold for low average score
        chapter.averageIncorrect > 5 || // Example threshold for high incorrect answers
        chapter.averageUnattempted > 3 // Example threshold for high unattempted questions
      );
    }).map((chapter) => {
      const reasons = [];
      if (chapter.averageScore < 70) reasons.push('Low average score');
      if (chapter.averageIncorrect > 5) reasons.push('High incorrect answers');
      if (chapter.averageUnattempted > 3) reasons.push('High unattempted questions');
      return {
        chapterId: chapter.chapterId,
        reasons,
      };
    });

    // Step 5: Calculate Overall Performance
    const overallPerformance = chapterAnalysis.reduce(
      (acc, chapter) => {
        acc.totalScore += chapter.averageScore;
        acc.totalCorrect += chapter.averageCorrect;
        acc.totalIncorrect += chapter.averageIncorrect;
        acc.totalUnattempted += chapter.averageUnattempted;
        return acc;
      },
      { totalScore: 0, totalCorrect: 0, totalIncorrect: 0, totalUnattempted: 0 }
    );

    const overallResults = {
      overallAverageScore: overallPerformance.totalScore / chapterAnalysis.length,
      overallCorrect: overallPerformance.totalCorrect / chapterAnalysis.length,
      overallIncorrect: overallPerformance.totalIncorrect / chapterAnalysis.length,
      overallUnattempted: overallPerformance.totalUnattempted / chapterAnalysis.length,
    };

    // Save Analysis Results in TestPerformance Schema
    const testPerformanceData = {
      tests: chapterAnalysis.map((chapter) => ({
        testId: chapter.chapterId,
        average_test_correctAnswers: chapter.averageCorrect,
        average_test_incorrectAnswers: chapter.averageIncorrect,
        average_test_unattemptedQuestions: chapter.averageUnattempted,
        score: chapter.averageScore,
      })),
      chapterAnalysis,
      weakChapters,
      cognitive: "Conceptual", // Example cognitive value
      questionType: "MCQ", // Example question type
      timeAnalysis: {
        averageTimeTaken: 30, // Example average time taken
      },
      overallPerformance: overallResults,
    };

    const testPerformance = new TestPerformance(testPerformanceData);
    await testPerformance.save();

    // Return Results to User
    res.status(200).json({
      message: 'Analysis complete and saved successfully',
      chapterAnalysis,
      weakChapters,
      overallPerformance: overallResults,
    });
  } catch (err) {
    res.status(500).json({ error: 'Error analyzing performance', details: err.message });
  }
});

module.exports = router;
