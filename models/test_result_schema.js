
  const testResultSchema = new mongoose.Schema({
    student_ID: {
        type: String,
        required: true,
    },
    test_chapters: {         //which chapter the test is from
      type: String,
      required: true,
    },
    score: {                 //score of the student 
      type: Number,
      required: true,
    },
    totalMarks: {
      type: Number,
      required: true,
    },
    timeTaken: {
      type: Number, // Time taken in minutes
    },
    totalTime:{
        type:Number,
        required:true,
    },
    correctAnswers: {
      type: Number,
    },
    incorrectAnswers: {
      type: Number,
    },
    attemptedQuestions: {
      type: Number,
    },
    unattemptedQuestions: {
      type: Number,
    },
    percentage: {            //percentage of marks obtained
      type: Number,
    },
    accuracyRate: {
        type: Number,        // Percentage of correct answers.
        required: true,
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  