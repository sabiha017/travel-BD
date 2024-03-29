FROM node:12.2.0-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM nginx:1.16.0-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .
CMD ["nginx", "-g", "daemon off;"]