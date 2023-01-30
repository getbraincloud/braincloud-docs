FROM jenkins/agent:alpine
USER root
RUN apk add --update nodejs npm
USER jenkins