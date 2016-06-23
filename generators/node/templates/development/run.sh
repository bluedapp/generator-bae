#!/bin/bash

service qconf-agent restart
pm2  --no-daemon start /usr/src/app/development/pm2.yml
