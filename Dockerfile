FROM node:14-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .

RUN yarn global add nodemon
RUN yarn

# Bundle app source
COPY . .

# Exports
EXPOSE 4000
CMD [ "npm", "run", "start.dev" ]
