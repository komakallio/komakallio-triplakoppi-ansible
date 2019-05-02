#!/bin/bash

if [ "$#" -ne 1 ]; then
	echo "usage: $0 [on/off]"
	exit 1
fi

if [ "$1" == "on" ]; then
	echo "$SET,R1=ON,R2=ON*41" >/dev/ttyUSB0
fi
if [ "$1" == "off" ]; then
	echo "$SET,R2=OFF*7C" >/dev/ttyUSB0
fi
