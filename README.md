

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
    
    `git clone https://github.com/Nagalin/CS369_Final_Task.git` <br/>
    ` cd CS369_Final_Task` 
    
2.  Install dependencies for both the frontend and backend:
    
    bash
    
    Copy code
    
    `# Install frontend dependencies` <br />
    `cd frontend` <br/>
   ` npm install` <br />
    
    # Install backend dependencies
    `cd ../backend` <br/>
    `npm install` <br/>
   
    

### Running the Application

#### Backend

1.  Navigate to the `backend` directory:
    
    bash
    
    Copy code
    
    `cd backend` 

    
2.  Create a `.env` file in the `backend` directory and configure your environment variables as needed which will be <br />
PORT  = Your port number for express <br />
SERVER  =  your MSSQL server <br />
USER  =  your MSSQL username <br />
PASSWORD  =  your MSSQL password <br />
DATABASE  =  your MSSQL database <br />
ACCESS_TOKEN_KEY  = your secret key for signing access token <br />
REFRESH_TOKEN_KEY  =  your secret key for signing refresh token <br />
ORIGIN_URL  = your react url <br />

3. `mkdir public` to create public folder for storing image 

    
4.  Start the Express server:
    `node index.js`
    
    

#### Frontend

1.  Navigate to the `frontend` directory:

    `cd frontend` 
    
2.  Start the React development server:
    `npm run dev
 
    By default, the React app will run on `http://localhost:3000`.
    

