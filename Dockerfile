FROM openjdk:11.0.16
RUN mkdir -p /home/stpl/secor-circleci

# Prepare environment
ENV SECOR_HOME=/home/stpl/secor-circleci

RUN groupadd --system --gid=9999 secor && \
    useradd --system --home-dir /home/stpl/secor-circleci --uid=9999 --gid=secor secor

WORKDIR /home/stpl/secor-circlci


