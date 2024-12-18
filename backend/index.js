const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path'); // For handling file paths
require('dotenv').config();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const userRoutes = require('./src/routes/auth-user-routes');
const blogRoutes = require('./src/routes/blog-routes');
const careerRoutes = require('./src/routes/career-routes');
const jobApplicationRoute = require('./src/routes/application-routes'); // Application route
const enquiryRoutes = require('./src/routes/enquiry-route');

app.use('/api/auth', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/career', careerRoutes);
app.use("/api", jobApplicationRoute); // Use job application route
app.use('/api', enquiryRoutes);

// MongoDB Connection and Server Startup
async function main() {
    try {
        // Connect to MongoDB using URL from environment variable
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected Successfully");

        // Home route
        app.get('/', (req, res) => {
            res.json({
                message: "API is running",
                availableRoutes: ["/api/auth", "/api/blogs", "/api/career", "/api/apply"]
            });
        });


        app.get('/api/career', (req, res) => {
    const { search = '' } = req.query;
    const careers = database.careers; // Example: your career data source

    const filteredCareers = careers.filter((career) =>
        career.title.toLowerCase().includes(search.toLowerCase())
    );

    res.json(filteredCareers);
});

        // Catch-all route for unknown paths
        app.use((req, res) => {
            res.status(404).json({ message: "API route not found" });
        });

        // Start server
        app.listen(port, () => {
            console.log(`Server running at http://localhost:3000:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

main();
