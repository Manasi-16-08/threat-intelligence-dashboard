FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 👇 Ensure .pkl files get into the image (assuming they're in backend/ml/)
COPY ml
RUN apt-get update && apt-get install -y python3 python3-pip

EXPOSE 5000
CMD ["node", "server.js"]
