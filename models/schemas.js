const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
  standardName: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const chapterSchema = new mongoose.Schema({
  standard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Standard',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const exerciseSchema = new mongoose.Schema({
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  
  },
});

const questionSchema = new mongoose.Schema({
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
    enum: ['MCQ','True/False','Numerical'], // Add more as needed
  },
  answerFormat: {
    type: String,
    required: true,
    enum: ['MCQ','True/False','Numerical'], // Align with question types
  },

  options: { // For MCQ type questions. Can also be used for true false questions
    type: Array,
  },  
  numericalAnswer: { // Field for storing double values
    type: Number, 
  },
  images: [
    {
      imageURL: {
        type: String, // URL or file path for the image
      },
      caption: {
        type: String, // Caption describing the image
      },
      usageType: {
        type: String,
        enum: ['question', 'option', 'solution'], // Specify how the image is used
      },
    },
  ],
  marks: {
    type: Number, // Example: 5 marks for a question
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  Standard: mongoose.model('Standard', standardSchema),
  Chapter: mongoose.model('Chapter', chapterSchema),
  Exercise: mongoose.model('Exercise', exerciseSchema),
  Question: mongoose.model('Question', questionSchema),
};









//   answer: {
//     type: String, // Can be a string for explanations or numerical for MCQs
//     required: true,
//   },