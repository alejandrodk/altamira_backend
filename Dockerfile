FROM node:12.18.2

COPY ["package.json","yarn.lock" ,"/usr/src/"]

WORKDIR /usr/src

RUN yarn

COPY [".", "/usr/src"]

EXPOSE 3000

CMD ["yarn", "debug"]