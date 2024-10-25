FROM node:20-alpine

WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies

RUN npm install

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

# Start the server using the production build
CMD ["npm", "start"]