FROM docker.blued.cn/mds/node:6
ARG env=production


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN mkdir logs

COPY package.json /usr/src/app/
RUN cnpm install --production

COPY . /usr/src/app

RUN mkdir /etc/service/<%= project %>
COPY ./$env/run.sh /etc/service/<%= project %>/run
RUN chmod +x /etc/service/<%= project %>/run

EXPOSE 8000

CMD ["/sbin/my_init"]
