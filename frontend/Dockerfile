# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Forward /api to backend via env or ingress in K8s; for Docker Compose, vite dev server proxies to backend.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
