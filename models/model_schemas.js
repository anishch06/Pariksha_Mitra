
const studentsarr = [
  {
    studentId: "Student-1",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 85,
        accuracyRate: 90,
        timetaken: 75,
        test_correctAnswers: 25,
        test_incorrectAnswers: 10,
        test_unattemptedQuestions: 5,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 15,
            chapter_incorrectAnswers: 4,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 7,
            chapter_incorrectAnswers: 4,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 3,
            chapter_incorrectAnswers: 2,
            chapter_unattemptedQuestions: 3,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-2",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 75,
        accuracyRate: 80,
        timetaken: 80,
        test_correctAnswers: 24,
        test_incorrectAnswers: 12,
        test_unattemptedQuestions: 4,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 14,
            chapter_incorrectAnswers: 5,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 6,
            chapter_incorrectAnswers: 4,
            chapter_unattemptedQuestions: 2,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 4,
            chapter_incorrectAnswers: 3,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-3",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 90,
        accuracyRate: 95,
        timetaken: 70,
        test_correctAnswers: 28,
        test_incorrectAnswers: 6,
        test_unattemptedQuestions: 6,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 16,
            chapter_incorrectAnswers: 2,
            chapter_unattemptedQuestions: 2,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 10,
            chapter_incorrectAnswers: 2,
            chapter_unattemptedQuestions: 0,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 2,
            chapter_incorrectAnswers: 2,
            chapter_unattemptedQuestions: 4,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-4",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 80,
        accuracyRate: 85,
        timetaken: 65,
        test_correctAnswers: 24,
        test_incorrectAnswers: 10,
        test_unattemptedQuestions: 6,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 12,
            chapter_incorrectAnswers: 6,
            chapter_unattemptedQuestions: 2,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 8,
            chapter_incorrectAnswers: 3,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 4,
            chapter_incorrectAnswers: 1,
            chapter_unattemptedQuestions: 3,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-5",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 70,
        accuracyRate: 75,
        timetaken: 85,
        test_correctAnswers: 21,
        test_incorrectAnswers: 15,
        test_unattemptedQuestions: 4,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 10,
            chapter_incorrectAnswers: 7,
            chapter_unattemptedQuestions: 3,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 7,
            chapter_incorrectAnswers: 5,
            chapter_unattemptedQuestions: 0,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 4,
            chapter_incorrectAnswers: 3,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-6",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 95,
        accuracyRate: 98,
        timetaken: 65,
        test_correctAnswers: 31,
        test_incorrectAnswers: 6,
        test_unattemptedQuestions: 3,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 18,
            chapter_incorrectAnswers: 2,
            chapter_unattemptedQuestions: 0,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 12,
            chapter_incorrectAnswers: 3,
            chapter_unattemptedQuestions: 0,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 1,
            chapter_incorrectAnswers: 1,
            chapter_unattemptedQuestions: 2,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-7",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 65,
        accuracyRate: 70,
        timetaken: 90,
        test_correctAnswers: 20,
        test_incorrectAnswers: 12,
        test_unattemptedQuestions: 8,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 10,
            chapter_incorrectAnswers: 6,
            chapter_unattemptedQuestions: 4,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 6,
            chapter_incorrectAnswers: 3,
            chapter_unattemptedQuestions: 3,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 4,
            chapter_incorrectAnswers: 3,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-8",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 88,
        accuracyRate: 92,
        timetaken: 80,
        test_correctAnswers: 28,
        test_incorrectAnswers: 7,
        test_unattemptedQuestions: 5,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 15,
            chapter_incorrectAnswers: 4,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 9,
            chapter_incorrectAnswers: 4,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 4,
            chapter_incorrectAnswers: 1,
            chapter_unattemptedQuestions: 3,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-9",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 82,
        accuracyRate: 87,
        timetaken: 78,
        test_correctAnswers: 26,
        test_incorrectAnswers: 10,
        test_unattemptedQuestions: 4,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 14,
            chapter_incorrectAnswers: 5,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 8,
            chapter_incorrectAnswers: 2,
            chapter_unattemptedQuestions: 2,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 4,
            chapter_incorrectAnswers: 3,
            chapter_unattemptedQuestions: 1,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
  {
    studentId: "Student-10",
    tests: [
      {
        testId: "64736f6d723461623536616237",
        score: 78,
        accuracyRate: 80,
        timetaken: 85,
        test_correctAnswers: 26,
        test_incorrectAnswers: 9,
        test_unattemptedQuestions: 5,
        total_test_questions: 40,
        chapterPerformance: [
          {
            chapterId: "64736f6d723461623536616237",
            chapter_correctAnswers: 14,
            chapter_incorrectAnswers: 3,
            chapter_unattemptedQuestions: 3,
            total_chapter_questions: 20,
          },
          {
            chapterId: "64736f6d723461623536616238",
            chapter_correctAnswers: 8,
            chapter_incorrectAnswers: 4,
            chapter_unattemptedQuestions: 0,
            total_chapter_questions: 12,
          },
          {
            chapterId: "64736f6d723461623536616239",
            chapter_correctAnswers: 4,
            chapter_incorrectAnswers: 2,
            chapter_unattemptedQuestions: 2,
            total_chapter_questions: 8,
          },
        ],
      },
    ],
  },
];


  
  
 
    // Group students by chapter
    const studentsByChapter = {};
    students.forEach(student => {
      student.tests.forEach(test => {
        test.chapterIds.forEach(chapterId => {
          if (!studentsByChapter[chapterId]) {
            studentsByChapter[chapterId] = [];
          }
          studentsByChapter[chapterId].push(student);
        });
      });
    });
  
    
    // Calculate chapter-wise performance
    const chapterAnalysis = [];
    for (const chapterId in studentsByChapter) {
      const chapterStudents = studentsByChapter[chapterId];
      const chapterTotalScore = chapterStudents.reduce((acc, student) => acc + student.tests[0].score, 0); // Assuming one test per student
      const chapterTotalCorrect = chapterStudents.reduce((acc, student) => acc + student.tests[0].test_correctAnswers, 0);
      const chapterTotalIncorrect = chapterStudents.reduce((acc, student) => acc + student.tests[0].test_incorrectAnswers, 0);
      const chapterTotalUnattempted = chapterStudents.reduce((acc, student) => acc + student.tests[0].test_unattemptedQuestions, 0);
      const chapterAvgScore = chapterTotalScore / chapterStudents.length;
      const chapterAvgCorrect = chapterTotalCorrect / chapterStudents.length;
      const chapterAvgIncorrect = chapterTotalIncorrect / chapterStudents.length;
      const chapterAvgUnattempted = chapterTotalUnattempted / chapterStudents.length;
    
      chapterAnalysis.push({
        chapterId: chapterId,
        averageScore: chapterAvgScore,
        averageCorrect: chapterAvgCorrect,
        averageIncorrect: chapterAvgIncorrect,
        averageUnattempted: chapterAvgUnattempted,
      });
    }
    
    // Identify weak chapters (example: based on low accuracy rate)
    const weakChapters = [];
    for (const chapter of chapterAnalysis) {
      if (chapter.averageScore < 70) { // Example threshold for weak chapters
        weakChapters.push({
          chapterId: chapter.chapterId,
          reason: 'Low average score',
        });
      }
    }
    
    // Calculate overall test performance (similar to your previous code)
    const totalScore = students.reduce((acc, student) => acc + student.tests[0].score, 0); // Assuming one test per student
    const totalAccuracy = students.reduce((acc, student) => acc + student.tests[0].accuracyRate, 0);
    const totalTimeTaken = students.reduce((acc, student) => acc + student.tests[0].timeTaken, 0);
    const totalCorrect = students.reduce((acc, student) => acc + student.tests[0].test_correctAnswers, 0);
    const totalIncorrect = students.reduce((acc, student) => acc + student.tests[0].test_incorrectAnswers, 0);
    const totalUnattempted = students.reduce((acc, student) => acc + student.tests[0].test_unattemptedQuestions, 0);
    
    const numStudents = students.length;
    const overallAverageScore = totalScore / numStudents;
    const overallAccuracyRate = totalAccuracy / numStudents;
    const averageTimeTaken = totalTimeTaken / numStudents;
    const averageCorrect = totalCorrect / numStudents;
    const averageIncorrect = totalIncorrect / numStudents;
    const averageUnattempted = totalUnattempted / numStudents;


   
    ////
    const validateTestPerformance = function (next) {
      const errors = [];
    
      // Validate tests questions
      if (this.tests) {
        for (const test of this.tests) {
          const totalTestQuestions = test.total_test_questions || 0;
    
          // Sum test-level correct, incorrect, and unattempted questions
          const testSum =
            (test.test_correctAnswers || 0) +
            (test.test_incorrectAnswers || 0) +
            (test.test_unattemptedQuestions || 0);
    
          if (testSum !== totalTestQuestions) {
            errors.push(
              `Validation failed: For test ID ${test.testId}, the sum of correct, incorrect, and unattempted questions (${testSum}) must equal total test questions (${totalTestQuestions}).`
            );
          }
    
          // Aggregate chapter performance and compare with test-level data
          if (test.chapterPerformance) {
            let chapterCorrectSum = 0;
            let chapterIncorrectSum = 0;
            let chapterUnattemptedSum = 0;
    
            for (const chapter of test.chapterPerformance) {
              const totalChapterQuestions = chapter.total_chapter_questions || 0;
    
              // Sum chapter-level correct, incorrect, and unattempted questions
              const chapterSum =
                (chapter.chapter_correctAnswers || 0) +
                (chapter.chapter_incorrectAnswers || 0) +
                (chapter.chapter_unattemptedQuestions || 0);
    
              if (chapterSum !== totalChapterQuestions) {
                errors.push(
                  `Validation failed: For chapter ID ${chapter.chapterId}, the sum of correct, incorrect, and unattempted questions (${chapterSum}) must equal total chapter questions (${totalChapterQuestions}).`
                );
              }
    
              // Accumulate chapter-level data for aggregation validation
              chapterCorrectSum += chapter.chapter_correctAnswers || 0;
              chapterIncorrectSum += chapter.chapter_incorrectAnswers || 0;
              chapterUnattemptedSum += chapter.chapter_unattemptedQuestions || 0;
            }
    
            // Compare aggregated chapter data with test-level data
            if (
              chapterCorrectSum !== (test.test_correctAnswers || 0) ||
              chapterIncorrectSum !== (test.test_incorrectAnswers || 0) ||
              chapterUnattemptedSum !== (test.test_unattemptedQuestions || 0)
            ) {
              errors.push(
                `Validation failed: For test ID ${test.testId}, the aggregated chapter data (correct: ${chapterCorrectSum}, incorrect: ${chapterIncorrectSum}, unattempted: ${chapterUnattemptedSum}) does not match the test-level data (correct: ${test.test_correctAnswers}, incorrect: ${test.test_incorrectAnswers}, unattempted: ${test.test_unattemptedQuestions}).`
              );
            }
          }
        }
      }
    
      // If any errors were collected, pass them to the next middleware
      if (errors.length > 0) {
        return next(new Error(errors.join("\n")));
      }
    
      next(); // Proceed if all validations pass
      studentPerformanceSchema.pre("save", validateTestPerformance); 
      studentPerformanceSchema.pre("updateOne", validateTestPerformance);
      studentPerformanceSchema.pre("findOneAndUpdate", validateTestPerformance);

    };
      //



  



  

// example 
// const TestPerformance = mongoose.model('TestPerformance', testPerformanceSchema);

// const sampleData = {
//   tests: [
//     {
//       testId: mongoose.Types.ObjectId('640c9c4e5fbd5e50b8f91db0'),
//       score: 85,
//       accuracyRate: 90.5,
//       timetaken: 120,
//       average_test_correctAnswers: 18,
//       average_test_incorrectAnswers: 2,
//       average_test_unattemptedQuestions: 0,
//     },
//   ],
//   chapterAnalysis: [
//     {
//       chapterId: mongoose.Types.ObjectId('640c9c4e5fbd5e50b8f91db2'),
//       averageCorrect: 12,
//       averageIncorrect: 3,
//       averageUnattempted: 1
//     },
//     {
//       chapterId: mongoose.Types.ObjectId('640c9c4e5fbd5e50b8f91db3'),
//       averageCorrect: 8,
//       averageIncorrect: 2,
//       averageUnattempted: 0
//     }
//   ],
//   weakChapters: [
//     {
//       chapterId: mongoose.Types.ObjectId('640c9c4e5fbd5e50b8f91db4'),
//       reason: 'Lack of understanding in key concepts'
//     },
//     {
//       chapterId: mongoose.Types.ObjectId('640c9c4e5fbd5e50b8f91db5'),
//       reason: 'Need more practice on problem-solving techniques'
//     }
//   ],
//   cognitive: 'Conceptual',
//   questionType: 'MCQ',
//   difficultyAnalysis: [
//     {
//       difficultyLevel: 'medium',
//       accuracyRate: 85.5
//     },
//     {
//       difficultyLevel: 'hard',
//       accuracyRate: 70.2
//     }
//   ],
//   timeAnalysis: {
//     averageTimeTaken: 105
//   }
// };

// Insert sample data into the MongoDB collection
TestPerformance.create(sampleData)
  .then(result => {
    console.log('Sample data inserted:', result);
  })
  .catch(error => {
    console.error('Error inserting sample data:', error);
  });


  