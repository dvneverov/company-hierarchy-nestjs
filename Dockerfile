FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install --production

EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]
#CMD ["npx", "typeorm", "migration:run"]

# Install development packages if NODE_ENV is set to "development"
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN if [ "$NODE_ENV" == "development" ]; then npm install ; fi
