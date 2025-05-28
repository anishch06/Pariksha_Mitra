const express = require('express');
const connectDB = require('./connect');
const app = express();
connectDB();  // Connect to MongoDB
app.use(express.json()); // This middleware is required to parse JSON data

// schemas would be defined here or imported
const { TestPerformance } = require('./feedback_schemas.js');  // Assuming models are exported 
const { StudentPerformance } = require('./feedback_schemas.js');  


// POST route for creating student performance data
app.post('/StudentPerformance', async (req, res) => {
  try {
      // Extract data from the request body
      const { studentId, tests } = req.body;

      // Create a new instance of the StudentPerformance model with the data received from the client
      const newStudentPerformance = new StudentPerformance({
          studentId,
          tests
      });

      // Save the new student performance document to the database
      await newStudentPerformance.save();

     
      res.status(201).json(newStudentPerformance);
  } catch (err) {
      // Respond with an error if something goes wrong
      res.status(400).json({ error: 'Failed to create student performance', details: err });
  }
});

// Sample GET endpoint to fetch all student performances
app.get('/StudentPerformance', async (req, res) => {
  try {
      const studentPerformances = await StudentPerformance.find();
      res.status(200).json(studentPerformances);
  } catch (err) {
      res.status(400).json({ error: 'Failed to fetch student performances', details: err });
  }
});

app.get('/analyzePerformance', async (req, res) => {
  try {
    // fetch all student performance data
    const students = await StudentPerformance.find();
    console.log(students);

    // group students by chapter
    const chaptersById = {};
    console.log("before loop");

    let studentctr = 0; // Initialize student counter
    students.forEach((student) => {
      studentctr++; // Increment student count
      student.tests.forEach((test) => {
        test.chapterPerformance.forEach((chapter) => {
          const chapterId = chapter.chapterId;
          if (!chaptersById[chapterId]) {
            chaptersById[chapterId] = [];
          }
          chaptersById[chapterId].push(chapter);
          console.log(`Pushed data for chapter: ${chapterId}`);
        });
      });
    });

    console.log("after loop");
    console.log("Grouped chapters by ID:", JSON.stringify(chaptersById, null, 2));

    // Initialize objects to store chapter-wise results
    const chapterWiseSums = {};
    const chapterWiseAverages = {};
    const weakChapters = []; // Array to store weak chapters

    // Define thresholds for weak chapters
    const incorrectThreshold = 5;
    const unattemptedThreshold = 3;
    const totalScoreThreshold = 15;

    // Traverse chapters by ID
    for (const chapterId in chaptersById) {
      let correctAnswersSum = 0;
      let incorrectAnswersSum = 0;
      let unattemptedQuestionsSum = 0;
      let totalScoreSum = 0;
      const chapterEntries = chaptersById[chapterId]; // All entries for the chapter
      const totalEntries = chapterEntries.length; // Total entries for the chapter

      // Sum up values for the chapter
      chapterEntries.forEach((entry) => {
        totalScoreSum += entry.chapter_score || 0; // Handle cases where score is undefined
        if (entry.chapter_correctAnswers !== undefined) {
          correctAnswersSum += entry.chapter_correctAnswers;
        }
        if (entry.chapter_incorrectAnswers !== undefined) {
          incorrectAnswersSum += entry.chapter_incorrectAnswers;
        }
        if (entry.chapter_unattemptedQuestions !== undefined) {
          unattemptedQuestionsSum += entry.chapter_unattemptedQuestions;
        }
      });

      // Calculate averages
      const averageCorrect = correctAnswersSum / studentctr;
      const averageIncorrect = incorrectAnswersSum / studentctr;
      const averageUnattempted = unattemptedQuestionsSum / studentctr;
      const averageScore = totalScoreSum / studentctr;

      // Store chapter averages
      chapterWiseAverages[chapterId] = {
        averageCorrect,
        averageIncorrect,
        averageUnattempted,
        averageScore,
      };

      // Check if the chapter is weak
      if (
        averageIncorrect > incorrectThreshold ||
        averageUnattempted > unattemptedThreshold ||
        averageScore < totalScoreThreshold
      ) {
        weakChapters.push({
          chapterId,
          averageCorrect,
          averageIncorrect,
          averageUnattempted,
          averageScore,
        });
      }

      // Store chapter sums
      chapterWiseSums[chapterId] = {
        totalCorrectAnswers: correctAnswersSum,
        totalIncorrectAnswers: incorrectAnswersSum,
        totalUnattemptedQuestions: unattemptedQuestionsSum,
        totalScore: totalScoreSum,
      };
    }

    // Log results
    console.log("Chapter-wise sums:", chapterWiseSums);
    console.log("Chapter-wise averages:", chapterWiseAverages);
    console.log("Weak chapters:", weakChapters);

    // Return the analysis
    res.status(200).json({
      chapterWiseSums,
      chapterWiseAverages,
      weakChapters,
    });
  } catch (err) {
    // Handle any errors
    console.error("Error analyzing performance:", err);
    res.status(500).json({ error: 'Error analyzing performance', details: err });
  }
});



 app.get('/TestPerformance', async (req, res) => {
    try {
      const testPerformances = await TestPerformance.find();  // Use the model to fetch all documents from the collection
      res.status(200).json(testPerformances);  // Send the fetched data as a JSON response
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch TestPerformance data', details: err });
    }
  });

  ////     POST TEST PERFORMANCE
  app.post('/TestPerformance', async (req, res) => {
    const { tests, chapterAnalysis, weakChapters, cognitive, questionType, difficultyAnalysis, timeAnalysis } = req.body;
  
    try {
      // Create a new instance of the TestPerformance model with the data received from the client
      const newTestPerformance = new TestPerformance({
        tests,
        chapterAnalysis,
        weakChapters,
        cognitive,
        questionType,
        difficultyAnalysis,
        timeAnalysis,
      });
  
      // Save the new test performance document to the database
      await newTestPerformance.save();
  
      // Respond with the newly created document
      res.status(201).json(newTestPerformance);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create TestPerformance', details: err });
    }
  });
  ////analysis
// Route for analyzing performance
app.get('/analyzePerformance', async (req, res) => {
  try {
    // Fetch all student performance data
    const students = await StudentPerformance.find();

    // Group students by chapter
    const studentsByChapter = {};
    students.forEach(student => {
      student.tests.forEach(test => {
        test.chapterPerformance.forEach(chapter => {
          const chapterId = chapter.chapterId;
          if (!studentsByChapter[chapterId]) {
            studentsByChapter[chapterId] = [];
          }
          studentsByChapter[chapterId].push(student);
        });
      });
    });

   
      

    
      
    
}catch (err) {
    res.status(500).json({ error: 'Error analyzing performance', details: err });
  }
});


  ///analysis ends 
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });




