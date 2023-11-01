FROM node:18-alpine

WORKDIR ./usr/src/api

COPY ./package.json package-lock.json .

RUN npm ci --include=dev

COPY . .

# production port
ENV PORT=8080

EXPOSE 3000

CMD ["npm", "run", "start"]