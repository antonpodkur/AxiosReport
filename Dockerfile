FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /usr/src/app
COPY server/ ./server/
RUN cd server && npm install

FROM node:10
WORKDIR /usr/src/app/
COPY --from=ui-build /usr/src/app/client/build ./client/build
COPY --from=server-build /usr/src/app/server ./server

ENV DB_CONNECTION=mongodb+srv://Anton:axiospassword@axiosdb.juupn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV NODE_ENV=production

RUN cat ./server/server.js

EXPOSE 3333

CMD ["node", "./server/server.js"]

