FROM node:18.15.0
WORKDIR /app
COPY ./package*.json ./
RUN npm install && npm install -g serve
COPY ./ ./

ARG SERVER_URL_BASE
ENV VITE_PUBLIC_SERVER_URL_BASE=$SERVER_URL_BASE

CMD ["bin/www"]
# Build APP
RUN npm run build

# Expose Port
# EXPOSE 3001

# Entrypoint
ENTRYPOINT serve -s dist -l 3001


