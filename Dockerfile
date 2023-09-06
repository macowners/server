FROM node:latest
RUN npm install -g @nestjs/cli
WORKDIR /server
COPY package.json yarn.lock ./
RUN yarn
COPY . .
CMD ["yarn", "start:dev"]
EXPOSE 3000