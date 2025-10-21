# Use official Node.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app and build
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only required files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm install --omit=dev

EXPOSE 8080
ENV PORT=8080
CMD ["npm", "start"]
