FROM docker.blued.cn/mds/node:6
ARG env=production


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN mkdir logs

COPY package.json /usr/src/app/
RUN cnpm install --production

COPY . /usr/src/app

RUN mkdir /etc/service/bae
COPY ./$env/run.sh /etc/service/bae/run
RUN chmod +x /etc/service/bae/run

EXPOSE 8000

CMD ["/sbin/my_init"]
