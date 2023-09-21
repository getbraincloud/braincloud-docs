FROM ubuntu:latest
WORKDIR /app
RUN apt-get update && apt-get install -y curl git
# x64
RUN curl -O https://dl.typesense.org/releases/0.24.0/typesense-server-0.24.0-linux-amd64.tar.gz
RUN tar -xzf typesense-server-0.24.0-linux-amd64.tar.gz
COPY typesense-data/ ./typesense-data/
COPY config.json .
COPY typesenselocal.env .
EXPOSE 8108
ENTRYPOINT ["./typesense-server", "--data-dir=/app/typesense-data", "--api-key=xyz", "--enable-cors"]