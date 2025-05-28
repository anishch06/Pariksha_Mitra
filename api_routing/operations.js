

const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/ParikshamitraDB"; // Replaced with  MongoDB connection string

async function connectToDatabase() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(); 
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; 
  }
}

async function getChaptersForStandard(standardName) {
  const db = await connectToDatabase();
  const standards = db.collection("standards");
  const chapters = db.collection("chapters");

  const standard = await standards.findOne({ standardName }); 
  if (!standard) {
    return []; 
  }

  const chaptersForStandard = await chapters.find({ standardId: standard._id }).toArray();
  return chaptersForStandard;
}

async function getExercisesForChapter(chapterName, standardName) {
  const chapters = await getChaptersForStandard(standardName);
  const chapter = chapters.find((chap) => chap.chapterName === chapterName); 
  if (!chapter) {
    return []; 
  }

  const exercises = db.collection("exercises");
  const exercisesForChapter = await exercises.find({ chapterId: chapter._id }).toArray();
  return exercisesForChapter;
}

async function getQuestionsForExercise(exerciseName, chapterName, standardName) {
  const exercises = await getExercisesForChapter(chapterName, standardName);
  const exercise = exercises.find((ex) => ex.exerciseName === exerciseName); 
  if (!exercise) {
    return []; 
  }

  const questions = db.collection("questions");
  const questionsForExercise = await questions.find({ exerciseId: exercise._id }).toArray();
  return questionsForExercise;
}

module.exports = {
  connectToDatabase,
  getChaptersForStandard,
  getExercisesForChapter,
  getQuestionsForExercise,
};