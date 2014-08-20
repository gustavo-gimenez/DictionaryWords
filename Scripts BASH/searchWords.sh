#!/bin/bash
if [ -f ~/results.txt ]; then
rm ~/results.txt
fi
find . -type f -name *.$1 -exec sh -c '
  for f do
    while read p; 
    do
    echo "$p" | grep -o "%%\<.*\>%%" >> ~/results.txt
    done <$f
  done
cat ~/results.txt | sort | uniq > ~/NoDuplicates.txt	
echo Los Resultados estan en ~/NoDuplicates.txt
' sh {} +




