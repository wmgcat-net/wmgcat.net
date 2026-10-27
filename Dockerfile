FROM node:22-alpine AS base

WORKDIR /app

FROM base AS deps

COPY package.json ./
RUN npm i --force

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/drizzle.config.ts ./drizzle.config.ts
COPY --from=builder /app/src/shared/api/model ./src/shared/api/model

EXPOSE 3000
CMD ["sh", "-c", "exec node server.js"]
