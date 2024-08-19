# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies, including Prisma CLI
RUN npm install --production

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Generate Prisma client
RUN npx prisma generate

# Step 7: Apply Prisma migrations (if using migrations)
# RUN npx prisma migrate deploy

# Step 8: Set environment variables (use a .env file or manually set them here)
# You can alternatively pass these as runtime variables using docker run -e
# ENV NODE_ENV=production
# ENV DATABASE_URL=postgresql://user:password@host:port/dbname
# ENV API_KEY=your_api_key_here
# Note: Do not hard-code sensitive data here. Use Docker secrets or environment files in production.

# Step 9: Expose the application port
EXPOSE 3000

# Step 10: Define the command to run your application
CMD ["npm", "start"]
