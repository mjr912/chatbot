FROM node:19-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=pass

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000

CMD ["npm","start"]
