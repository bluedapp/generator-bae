#!/bin/bash

service qconf-agent restart
pm2  --no-daemon start /usr/src/app/production/pm2.yml
