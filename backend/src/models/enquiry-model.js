// src/models/application-model.js
const mongoose = require('mongoose');

// Define a schema for application data
const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create a model from the schema
const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;
