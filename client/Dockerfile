# Use the official Node.js image as base
FROM node:14

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build production bundle
RUN npm run build

# Command to run the application
CMD ["npm", "start"]
