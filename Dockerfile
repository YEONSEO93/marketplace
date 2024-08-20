FROM node:18-bullseye-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies in the working directory
RUN npm install --production

# Copy the rest of your application files to the working directory
COPY . .

# Generate Prisma client in the working directory
RUN npx prisma generate

# Build the Next.js application in the working directory
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application from the working directory
CMD ["npm", "start"]
