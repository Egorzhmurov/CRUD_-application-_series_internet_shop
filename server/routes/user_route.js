import express from "express";
import { create, getAllUsers, getUserById, update, deleteUser } from "../controller/User_conroller.js";

const route = express.Router();

// Route to create a new user
route.post("/user", create);

// Route to get all users
route.get("/users", getAllUsers);

// Route to get a specific user by ID
route.get("/user/:id",getUserById);

// Route to update a user by ID
route.put("/update/user/:id",update);

// Route to delete a user by ID
route.delete("/delete/user/:id", deleteUser);

export default route;