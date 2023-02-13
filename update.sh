#!/bin/bash
ssh -tt cjh0120@https://github.com/CJH0120/sideProject-I <<EOF
    cd sideProject-I
    ./update.sh
    exit
EOF