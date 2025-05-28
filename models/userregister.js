const userSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
    phoneNumber: { type: String },
    dateOfBirth: { type: Date ,required:[true,"Date of birth is required"]}, 
    schoolName: { type: String ,required:[true,"School Name is required"]},
    profilePicture: { type: String }, // URL or path to a user's profile picture
    preferredLanguage: { type: String, default: 'Marathi'}, // To store preferred language for communication
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: [true, "Gender is required"] },
    role: { type: String, enum: ['Student', 'Teacher', 'Admin'], required: [true, "Role is required"] },
    securityQuestions: [{ question: String, answer: String }],
    accountStatus: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    emergencyContact: { 
        name: { type: String },
        relationship: { type: String },
        phoneNumber: { type: String }
      },
}, { timestamps: true });