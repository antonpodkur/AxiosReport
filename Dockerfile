FROM node:latest
WORKDIR /api/
COPY src/ ./src/
RUN cd src && npm install

ARG DB_CONNECTION='mongodb+srv://Anton:axiospassword@axiosdb.juupn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

EXPOSE 3333

CMD ["node", "./src/index.js"]


