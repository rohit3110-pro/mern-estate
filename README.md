# MERN Estate

## Overview
MERN Estate is a full-stack web application for a real estate platform, built with the MERN (MongoDB, Express, React, Node.js) stack. It allows users to browse, create, update, and delete property listings. The application features robust user authentication, property search with filters, and a user-friendly interface.

## Features
- **User Authentication**: Secure user registration, login, and logout.  
- **Profile Management**: Users can update their profile information and change their password.  
- **Property Listings**: Create, view, update, and delete property listings with details such as title, description, price, address, and images.  
- **Search & Filter**: Powerful search functionality to find listings based on keywords, type (rent/sale), and more.  
- **Image Upload**: Easily upload and manage property images.  
- **Responsive Design**: Optimized for a seamless experience on both desktop and mobile devices.  

## Technologies Used

### Backend (API)
- **Node.js**: JavaScript runtime environment.  
- **Express.js**: Web application framework for Node.js.  
- **MongoDB**: NoSQL database for storing application data.  
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.  
- **JSON Web Tokens (JWT)**: For secure authentication.  
- **Bcrypt.js**: For password hashing.  

### Frontend (Client)
- **React**: A JavaScript library for building user interfaces.  
- **React Router DOM**: For client-side routing.  
- **Redux Toolkit**: For state management.  
- **Tailwind CSS**: A utility-first CSS framework for styling.  
- **Firebase Storage**: For storing and managing property images.  

## Getting Started

### Prerequisites
- Node.js installed (v14.x or higher)  
- MongoDB Atlas account or a local MongoDB instance  
- Git installed  

### 1. Clone the repository
```bash
git clone https://github.com/rohit3110-pro/mern-estate.git
cd mern-estate
```
### 2. Install dependencies
```bash
# Install backend dependencies
cd api
npm install

# Install frontend dependencies
cd ../client
npm install
```
### 3. Environment Variables

- Create a .env file in the api directory with the following variables:
```bash
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret key>

```
- And a .env file in the client directory:
```bash
VITE_FIREBASE_API_KEY=<Your Firebase API Key>
VITE_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
VITE_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
VITE_FIREBASE_APP_ID=<Your Firebase App ID>
VITE_FIREBASE_MEASUREMENT_ID=<Your Firebase Measurement ID>

```
## 4. Run the application
- Start the backend and frontend development servers.
```bash
# From the root directory:
# Start the backend server
cd api
npm run dev

# In a new terminal, from the root directory:
# Start the frontend server
cd ../client
npm run dev
