const mongoose = require('mongoose');
const express = require('express');
const app = express();
const connectDB = require('./connect');
connectDB();
app.use(express.json()); // This middleware is required to parse JSON data

const { Standard, Chapter, Exercise, Question } = require('./schemas.js');
const { StudentPerformance,TestPerformance } = require('./feedback_schemas.js');



// GET all Standards
app.get('/standards', async (req, res) => {
    try {
      const standards = await Standard.find();
      res.status(200).json(standards);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch standards' });
    }
  });
  
  // POST a new Standard
  app.post('/standards', async (req, res) => {
    const { name } = req.body; // Extracting data from request body
    try {
      const newStandard = new Standard({ name });
      await newStandard.save();
      res.status(201).json(newStandard);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create standard', details: err });
    }
  });
  
  // GET Chapters by Standard ID
  app.get('/chapters/:standardId', async (req, res) => {
    const { standardId } = req.params; // Extracting standardId from URL parameters
    try {
      const chapters = await Chapter.find({ standardId });
      res.status(200).json(chapters);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch chapters' });
    }
  });
  
  // POST a new Chapter
  app.post('/chapters', async (req, res) => {
    const { name, standardId } = req.body; // Extracting data from request body
    try {
      const newChapter = new Chapter({ name, standardId });
      await newChapter.save();
      res.status(201).json(newChapter);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create chapter', details: err });
    }
  });
  
  // GET Questions by Chapter ID
  app.get('/questions/:chapterId', async (req, res) => {
    const { chapterId } = req.params;
    try {
      const questions = await Question.find({ chapterId });
      res.status(200).json(questions);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  });
  
  // POST a new Question
  app.post('/questions', async (req, res) => {
    const { text, type, answerFormat, chapterId } = req.body;
    try {
      const newQuestion = new Question({ text, type, answerFormat, chapterId });
      await newQuestion.save();
      res.status(201).json(newQuestion);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create question', details: err });
    }
  });
//GET TEST PERFORMANCE
  app.get('/TestPerformance', async (req, res) => {
    try {
      const testPerformances = await TestPerformance.find();  // Use the model to fetch all documents from the collection
      res.status(200).json(testPerformances);  // Send the fetched data as a JSON response
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch TestPerformance data', details: err });
    }
  });
//        POST TEST PERFORMANCE
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
  
     
      await newTestPerformance.save();
  
      
      res.status(201).json(newTestPerformance);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create TestPerformance', details: err });
    }
  });
  
  
  
  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });