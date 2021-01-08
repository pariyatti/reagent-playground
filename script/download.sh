#!/bin/sh

eval "$(pyenv init -)"

# debugging:
# echo "current dir:"
# pwd
# python google-images.py --opts "ift:png" $1 1 2>/dev/null | sed '/^[[:space:]]*$/d' | xargs -n 1 curl -o $1.png
# python google-images.py --opts "ift:png" $1 1
# exit

mkdir -p downloads
 
if [ $# = 1 ]; then
    echo "downloading..."
    python google-images.py --opts "ift:png" $1 1 2>/dev/null | sed '/^[[:space:]]*$/d' | xargs -n 1 curl -o $1.png
    mv  $1.png downloads/ 2>/dev/null
    echo "done."
else
    echo "Usage: $0 arg" >&2
    exit -1
fi
