FROM node:18-slim

WORKDIR /app

COPY package.json .
COPY package-lock.json* .
COPY .npmrc* .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"] 