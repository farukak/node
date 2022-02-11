FROM node:12.22.10-alpine3.15
WORKDIR /app
COPY . /app
COPY package*.json . 
RUN npm install
EXPOSE 3000
CMD npm start
#USER node
