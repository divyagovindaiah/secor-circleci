FROM openjdk:11.0.16

RUN mkdir -p /home/stpl/secor-docker

# Prepare environment
ENV SECOR_HOME=/home/stpl/secor-docker

RUN groupadd --system --gid=9999 secor && \
    useradd --system --home-dir /home/stpl/secor-docker --uid=9999 --gid=secor secor

WORKDIR /home/stpl/secor-docker


