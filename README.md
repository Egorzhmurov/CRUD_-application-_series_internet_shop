# CRUD Application - Internet Shop

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing an internet shop with complete CRUD operations.

## Features

- ✅ Create new users
- ✅ Read/Retrieve all users or specific user by ID
- ✅ Update user information
- ✅ Delete users from database
- ✅ MongoDB integration
- ✅ Express.js RESTful API
- ✅ Error handling with try-catch blocks

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Runtime**: ES Modules (ES6+)
- **Development**: Nodemon (auto-reload)

## Prerequisites

Before running the application, ensure you have:
- Node.js (v21+) installed
- MongoDB running locally or connection string ready
- npm (Node Package Manager)

## Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/Egorzhmurov/CRUD_-application-_series_internet_shop.git
cd CRUD_-application-_series_internet_shop
```

### Step 2: Install Dependencies
```bash
cd server
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory and add your configuration:
```env
PORT=[your_port]
MONGO_URL=[your_mongodb_connection_string]
```

Example structure (replace with your actual values):
```
PORT=8000
MONGO_URL=mongodb://localhost:27017/your_database_name
```

⚠️ **Do not commit the .env file - it's already in .gitignore**

### Step 4: Start MongoDB
Make sure MongoDB is running on your local machine:
```bash
mongod
```

### Step 5: Run the Application

#### Development Mode (with auto-reload):
```bash
npm run dev
```

#### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:[your_port]` (configure in .env)

## API Endpoints

### Base URL
```
http://localhost:[your_port]/api
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user` | Create a new user |
| GET | `/users` | Get all users |
| GET | `/user/:id` | Get a specific user by ID |
| PUT | `/update/user/:id` | Update user information |
| DELETE | `/delete/user/:id` | Delete a user |

### Example Requests

#### Create User
```bash
POST /api/user
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get All Users
```bash
GET /api/users
```

#### Get User by ID
```bash
GET /api/user/[USER_ID]
```

#### Update User
```bash
PUT /api/update/user/[USER_ID]
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "newemail@example.com"
}
```

#### Delete User
```bash
DELETE /api/delete/user/[USER_ID]
```

## Project Structure

```
server/
├── controller/
│   └── User_conroller.js    # Business logic for user operations
├── model/
│   └── user_model.js        # MongoDB user schema
├── routes/
│   └── user_route.js        # API routes
├── index.js                 # Main server file
├── .env                     # Environment variables (not committed)
├── package.json             # Dependencies
└── node_modules/            # Installed packages (not committed)
```

## Error Handling

All endpoints include proper error handling with try-catch blocks:
- **404 Not Found**: User doesn't exist
- **400 Bad Request**: User already exists (on creation)
- **500 Internal Server Error**: Server error with error message

## Development

### Useful npm Scripts

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

### Code Changes Auto-Reload
The project uses Nodemon, which automatically restarts the server when file changes are detected during development.

## License

This project is open source and available under the MIT License.

## Author

Egorzhmurov

## Support

For issues or questions, please open an issue on GitHub.
