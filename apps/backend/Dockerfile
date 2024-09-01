FROM node:20-alpine

LABEL name="uptime-monitor-api"

WORKDIR /var/www/service/backend

COPY . .

RUN apk add --no-cache curl && \
    npm install -g pnpm

RUN pnpm install

CMD ["pnpm", "run", "start"]