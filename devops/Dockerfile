FROM node:23-alpine

WORKDIR /iblog_frontend

# Install OS dependencies
RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN yarn

COPY . .

RUN npm run build
EXPOSE 3000
ENV PORT=3000

CMD ["npm", "run", "start"]


