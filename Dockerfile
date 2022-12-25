# Fetching the latest node image on alpine linux
FROM node:alpine AS development
#FROM 012345678910.dkr.ecr.us-east-1.amazonaws.com/test

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 3000

# Starting our application

CMD npm start

