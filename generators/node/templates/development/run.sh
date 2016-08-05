#!/bin/bash

service qconf-agent restart
# sleep 1
# qconf get_allhost /xxx/yyy/zzz
# ...
pm2  --no-daemon start /usr/src/app/development/pm2.yml
