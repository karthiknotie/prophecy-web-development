// src/routes/application-routes.js
const express = require('express');
const multer = require('multer');
const Application = require('../models/application-model');  // Import the Application model
const path = require('path');

const router = express.Router();

// Setup multer storage for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Save uploaded files to 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Ensure unique file names using timestamp
    }
});

const upload = multer({ storage: storage });

// Job application submission route (with resume upload)
router.post('/apply', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, phone, linkedin, jobTitle } = req.body;

        // Check if required fields are provided
        if (!name || !email || !phone || !req.file) {
            return res.status(400).json({ message: 'All fields are required, including resume' });
        }

        // Create a new application record
        const newApplication = new Application({
            name,
            email,
            phone,
            jobTitle,
            resume: req.file.path,  // Save resume file path
            linkedin: linkedin || 'No Linkedin Given',  // Optional message
        });

        // Save the application to the database
        await newApplication.save();

        // Send response indicating success
        return res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Define the route for fetching job applications
router.get('/career/applications', async (req, res) => {
    try {
      const applications = await Application.find(); // Get all applications from the database
      res.json(applications); // Send the applications as JSON response
    } catch (error) {
      console.error('Error fetching applications:', error);
      res.status(500).json({ message: 'Error fetching applications' });
    }
  });

  // Define the route for deleting a job application by ID
router.delete('/career/applications/:id', async (req, res) => {
    try {
        const { id } = req.params;  // Get the application ID from the URL params

        // Find the application by ID and delete it
        const application = await Application.findByIdAndDelete(id);

        // If application not found, return a 404 error
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        // Send success response
        return res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        console.error('Error deleting application:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
