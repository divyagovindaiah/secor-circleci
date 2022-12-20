FROM openjdk:11.0.16
# https://github.com/docker-library/openjdk/issues/145#issuecomment-334561903
# https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=894979
RUN rm /etc/ssl/certs/java/cacerts ; update-ca-certificates -f

RUN mkdir -p /home/stpl/secor-docker

# Prepare environment
ENV SECOR_HOME=/home/stpl/secor-docker

RUN groupadd --system --gid=9999 secor && \
    useradd --system --home-dir /home/stpl/secor-docker/secor --uid=9999 --gid=secor secor

WORKDIR /home/stpl/secor-docker/secor


