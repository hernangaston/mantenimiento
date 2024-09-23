FROM node:21

WORKDIR /myapp


COPY package.json .

RUN npm install

EXPOSE 3000

COPY . .

CMD npm dev
