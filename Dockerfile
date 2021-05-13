FROM node:14-alpine
COPY . .
CMD ["yarn", "dev:start"]
