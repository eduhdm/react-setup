FROM node

WORKDIR /app

EXPOSE 80

CMD ["yarn", "start:watch"]
