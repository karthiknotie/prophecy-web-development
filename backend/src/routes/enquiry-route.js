const express = require('express');
const Enquiry = require('../models/enquiry-model'); // Import the Enquiry model
const router = express.Router();

// Route for submitting an enquiry
router.post('/enquiry', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Check if required fields are provided
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required' });
        }

        // Create a new enquiry record
        const newEnquiry = new Enquiry({
            name,
            email,
            message,
        });

        // Save the enquiry to the database
        await newEnquiry.save();

        // Send response indicating success
        return res.status(201).json({ message: 'Enquiry submitted successfully' });
    } catch (error) {
        console.error('Error submitting enquiry:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for fetching all enquiries
router.get('/enquiries', async (req, res) => {
    try {
        const enquiries = await Enquiry.find(); // Get all enquiries from the database
        res.json(enquiries); // Send the enquiries as JSON response
    } catch (error) {
        console.error('Error fetching enquiries:', error);
        res.status(500).json({ message: 'Error fetching enquiries' });
    }
});

// Route for fetching a single enquiry by ID
router.get('/enquiries/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find the enquiry by ID
        const enquiry = await Enquiry.findById(id);

        if (!enquiry) {
            return res.status(404).json({ message: 'Enquiry not found' });
        }

        res.json(enquiry); // Send the enquiry as JSON response
    } catch (error) {
        console.error('Error fetching enquiry:', error);
        res.status(500).json({ message: 'Error fetching enquiry' });
    }
});

// Route for deleting an enquiry by ID
router.delete('/enquiries/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the enquiry by ID
        const deletedEnquiry = await Enquiry.findByIdAndDelete(id);

        if (!deletedEnquiry) {
            return res.status(404).json({ message: 'Enquiry not found' });
        }

        res.json({ message: 'Enquiry deleted successfully' });
    } catch (error) {
        console.error('Error deleting enquiry:', error);
        res.status(500).json({ message: 'Error deleting enquiry' });
    }
});

module.exports = router;
