FROM --platform=arm64 node:18
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm prune --production
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD ["node", "server.js"]