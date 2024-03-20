FROM node:20.10.0-slim
WORKDIR /Styling
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm","run","dev"]
