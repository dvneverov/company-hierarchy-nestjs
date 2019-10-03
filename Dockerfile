FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install --production

# CMD [ "npm", "start" ]
CMD [ "npm", "run", "start:dev" ]
EXPOSE 3000

# Install development packages if NODE_ENV is set to "development"
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN if [ "$NODE_ENV" == "development" ]; then npm install ; fi
