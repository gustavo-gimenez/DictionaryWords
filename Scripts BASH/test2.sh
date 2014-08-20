#!/bin/bash       

for f in ./*.$1
do
 echo "Processing $f"
	while read p; 
        do
           echo $p
        done <$f
 # do something on $f
done
