import User from "../model/user_model.js";

// Create a new user
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;

    // Check if the user already exists in the database
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Save the new user to the database
    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ errorMessage: error.message });
  }
};

// Retrieve all users from the database
export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    
    // Check if users collection is empty
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found." });
    }
    
    res.status(200).json(userData);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ errorMessage: error.message });
  }
};

// Retrieve a specific user by ID
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await User.findOne({ _id: id });

    if (!userData) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(userData);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ errorMessage: error.message });
  }
};

// Update a user by ID
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedData);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ errorMessage: error.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ errorMessage: error.message });
  }
};