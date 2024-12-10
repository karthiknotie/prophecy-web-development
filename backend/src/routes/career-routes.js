const express = require('express');
const router = express.Router();
const Career = require('../models/career-module');

// Create a new career post
router.post("/career-add", async (req, res) => {
    try {
        const { jobTitle, jobLocation, jobHeadline, jobType, jobDescription } = req.body;

        if (!jobTitle || !jobLocation || !jobHeadline || !jobType || !jobDescription) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const newCareer = new Career({ jobTitle, jobLocation, jobHeadline, jobType, jobDescription });
        await newCareer.save();

        res.status(201).send({ message: "Career Post Created Successfully", career: newCareer });
    } catch (error) {
        console.error("Error Creating Career Post:", error);
        res.status(500).send({ message: "Error creating career post" });
    }
});

// Fetch all career posts with optional filters for search and category
router.get('/', async (req, res) => {
    try {
        const { search, category } = req.query; // Get search and category from query params
        let query = {};

        if (search) {
            query.jobTitle = { $regex: search, $options: 'i' }; // Search for job titles (case-insensitive)
        }

        if (category) {
            query.jobLocation = category; // Filter by job location or another field
        }

        const careers = await Career.find(query);
        res.status(200).json(careers);
    } catch (error) {
        console.error("Error Fetching Careers:", error);
        res.status(500).json({ message: "Error fetching career posts" });
    }
});

// Update a career post
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { jobTitle, jobLocation, jobHeadline, jobType, jobDescription } = req.body;
  
      if (!jobTitle || !jobLocation || !jobHeadline || !jobType || !jobDescription) {
        return res.status(400).send({ message: "All fields are required" });
      }
  
      const updatedCareer = await Career.findByIdAndUpdate(
        id,
        { jobTitle, jobLocation, jobHeadline, jobType, jobDescription },
        { new: true } // This returns the updated document
      );
  
      if (!updatedCareer) {
        return res.status(404).json({ message: "Career Post Not Found" });
      }
  
      res.status(200).json({ message: "Career Post Updated Successfully", career: updatedCareer });
    } catch (error) {
      console.error("Error Updating Career Post:", error);
      res.status(500).json({ message: "Error updating career post" });
    }
  });

// Delete a career post
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCareer = await Career.findByIdAndDelete(id);
        if (!deletedCareer) {
            return res.status(404).json({ message: "Career Post Not Found" });
        }
        res.status(200).json({ message: "Career Post Deleted Successfully" });
    } catch (error) {
        console.error("Error Deleting Career Post:", error);
        res.status(500).json({ message: "Error deleting career post" });
    }
});

module.exports = router;
