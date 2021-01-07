#!/bin/sh

google-images.py debra 1 2>/dev/null | sed '/^[[:space:]]*$/d'

# todo: pipe to curl...xargs?

