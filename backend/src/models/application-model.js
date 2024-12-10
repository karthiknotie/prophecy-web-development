// src/models/application-model.js
const mongoose = require('mongoose');

// Define a schema for application data
const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    resume: { type: String, required: true },  // Store file path of the resume
    linkedin: { type: String, required: false },  // Optional LinkedIn profile
    jobTitle: { type: String, required: true },  // Store the job title
    createdAt: { type: Date, default: Date.now },
});

// Create a model from the schema
const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
