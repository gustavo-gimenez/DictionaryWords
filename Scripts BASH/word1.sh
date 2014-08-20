#!/bin/bash
printf "Searching in files with the extension, %s\n" "$1"
if [ "$1" = "" ]; then
	echo You must enter an extension
else
	for f in ./*.$1 
	do
	echo "Processing $f"
		while read p;
			do
			echo $p
		done <$f
	# do something on $f
	done
fi
