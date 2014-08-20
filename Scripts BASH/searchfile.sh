#!/bin/bash
if [ "$1" = "" ]; then
echo You must enter an extension
else
FINDEXT="*.$1"
for f in 'find .'*.$1;
do
printf "Searching in files with the extension, %s\n" "$1"
echo "Processing $f"
while read p; 
do
#aca va la logica para JSON
echo $p
done <$f
done
fi
