# Use official Node.js runtime
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the Vue.js app
RUN npm run build

# Expose port
EXPOSE 8080

# Serve the app
CMD ["npm", "run", "serve"]