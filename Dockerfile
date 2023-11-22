FROM public.ecr.aws/i1s0s3r2/node-alpine-image AS base0

ENV FC_LANG en-US
ENV LC_CTYPE en_US.UTF-8
ARG NODE_ENV=dev
ARG PORT=3000
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN ls -hl

FROM public.ecr.aws/i1s0s3r2/node-alpine-image AS base1

ENV FC_LANG en-US
ENV LC_CTYPE en_US.. .UTF-8
ARG NODE_ENV=dev
ARG PORT=3000
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
WORKDIR /app

COPY --from=base0 /app .
RUN ls -hl
CMD ["npm", "run", "start"]
EXPOSE ${PORT}