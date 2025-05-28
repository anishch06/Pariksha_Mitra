

const gameSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    standard:{
      type:Number,
      required:true,
    },
    subject:{
      type:String,
      required:true,
    },
    chapter:{
      type:String,
      required:true,
    },
    exercise:{
      type:Number,
      required:true,
    },
    description: {
      type: String,
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      default: 'Medium',
    },
    timeLimit: {
      type: Number, // Time limit in seconds for completing the game
    },
    status: {                   //current state of the game 
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
    numberLevels: {                 //Total number of levels
        type: Number,
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

const playerProgressSchema = new mongoose.Schema({
    playerId: {
      type: String,
      required: true,
    },
    current_lvl:{         //shows the current level of the player
     type:Number,
     required: true,
    },
    rank: {
    type: Number, //Can be displayed on a leadership board
    },
    score: {
      type: Number,
      default: 0,
    },
    attempts: {
      type: Number,
      default: 0,
    },
    time_taken:{
        type:Number, //Time taken to complete the game in seconds
        default:0,
    },
    completedAt: {
      type: Date,
    },

    rewardType: {
        type: String,
        enum: ['Badge', 'Points', 'Trophy'],
      },
    awardedAt: {
        type: Date,
        default: Date.now,
      },
  });
  





  