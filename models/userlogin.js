const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // User's username, unique
  password: { type: String, required: true }, // Hashed password, for security
  role: { 
    type: String, 
    enum: ['student', 'teacher', 'admin'], 
    required: true 
  },
  accountStatus: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },

  last_login: { type: Date }, // Timestamp for the last successful login
  failed_attempts: { type: Number, default: 0 }, // Tracks failed login attempts (used for security lockout)
  security_questions: [
    { 
      question: { type: String },
      answer_hash: { type: String } // Hashed answer for security
    }
  ], 
  created_at: { type: Date, default: Date.now },  
}, { timestamps: true }); 

// Create and export the model
module.exports = mongoose.model('Login', loginSchema);
