#!/bin/bash

# Update and upgrade system packages
sudo apt update
sudo apt upgrade -y

# Install Node.js from NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone the repository
git clone https://github.com/Nagalin/CS369_Final_Task.git

# Navigate to the frontend directory and build the project
cd CS369_Final_Task/frontend
npm install
npm run build

# Navigate to the backend directory, create public directory, and start the backend
cd ../backend
mkdir public
npm install
node index.js
