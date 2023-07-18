# Dockerfile
FROM node:14

WORKDIR /app

COPY api/package.json api/package-lock.json ./api/
COPY indexer/package.json indexer/package-lock.json ./indexer/

COPY search/package.json search/package-lock.json ./search/

RUN cd api && npm install
RUN cd indexer && npm install
RUN cd search && npm install

COPY . .

CMD ["node", "api/server.js"]
