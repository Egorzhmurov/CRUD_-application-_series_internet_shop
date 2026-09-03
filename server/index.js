import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// 1. Importing the cors middleware to handle Cross-Origin Resource Sharing
import cors from 'cors'; 
import route from './routes/user_route.js';

// Load environment variables from the .env file (from the root folder)
dotenv.config({ path: '../.env' });

// Initialize the application
const app = express();

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// 2. Applying the cors middleware to allow requests from the frontend (e.g., localhost:5173)
app.use(cors());

// Set up the port (takes from .env or defaults to 8000)
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

// Register user routes (all endpoints will start with /api)
app.use("/api", route);

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });