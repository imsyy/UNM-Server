FROM node:lts-alpine
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5678
CMD [ "npm", "start" ]
