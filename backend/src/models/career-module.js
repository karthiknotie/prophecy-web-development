const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
    jobTitle: { 
        type: String, 
        required: true, 
    },
    jobLocation: {
        type: String, 
        required: true, 
    },
    jobHeadline: {
        type: String, 
        required: true, 
    },
    jobType: {
        type: String, 
        required: true,
    },
    jobDescription: {
        type: String, 
        required: true, 
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const Career = mongoose.model('Career', CareerSchema);

module.exports = Career;
