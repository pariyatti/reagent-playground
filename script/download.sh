#!/bin/sh

google-images.py debra 1 2>/dev/null | sed '/^[[:space:]]*$/d'



if [ $# = 1 ]; then
    python google-images.py --opts "ift:png" $1 1 2>/dev/null | sed '/^[[:space:]]*$/d' | xargs -n 1 curl -o $1.png
else
    echo "Usage: $0 arg" >&2
    exit 
fi
