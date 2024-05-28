
## Overview

This project is a full-stack web application with a React frontend, an Express backend and MSSQL database. The project structure is designed to separate the client-side and server-side code into distinct folders for better organization and maintainability.

## Project Structure

-   `frontend/` - Contains the React application.
-   `backend/` - Contains the Express server.

## Getting Started

To get the project up and running on your local machine, follow these instructions.

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository to your local machine:
    
    bash
    
    Copy code
    
    `git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name` 
    
2.  Install dependencies for both the frontend and backend:
    
    bash
    
    Copy code
    
    `# Install frontend dependencies
    cd frontend
    npm install
    # or yarn install
    
    # Install backend dependencies
    cd ../backend
    npm install
    # or yarn install` 
    

### Running the Application

#### Backend

1.  Navigate to the `backend` directory:
    
    bash
    
    Copy code
    
    `cd backend` 

    
2.  Create a `.env` file in the `backend` directory and configure your environment variables as needed which will be
PORT  = Your port number for express
SERVER  =  your MSSQL server
USER  =  your MSSQL username
PASSWORD  =  your MSSQL password
DATABASE  =  your MSSQL database
ACCESS_TOKEN_KEY  = your secret key for signing access token
REFRESH_TOKEN_KEY  =  your secret key for signing refresh token
ORIGIN_URL  = your react url

3. `mkdir public` to create public folder for storing image 

    
4.  Start the Express server:
    
    bash
    
    Copy code
    
    `node index.js
    
    

#### Frontend

1.  Navigate to the `frontend` directory:
    
    bash
    
    Copy code
    
    `cd frontend` 
    
2.  Start the React development server:
    
    bash
    
    Copy code
    
    `npm run dev
 
    By default, the React app will run on `http://localhost:3000`.
    

