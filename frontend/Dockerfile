FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.output ./.output

ENV PORT=8080
ENV HOST=0.0.0.0

EXPOSE 8080

CMD ["node", ".output/server/index.mjs"]
