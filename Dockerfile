# Use official Node.js image
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN apk update && apk upgrade && npm install

# Copy the rest of the app and build
COPY . .
RUN npm run build

# Production image
FROM node:22-alpine AS runner
WORKDIR /app

# Copy only required files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/pages ./pages

RUN npm install --omit=dev

EXPOSE 3000
ENV PORT=3000
CMD ["npm", "start"]
