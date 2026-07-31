#!/bin/bash
cd ./$1
cat << EOF > index.html
<!doctype html>
<html>
<head>
<title>Index of /$1</title>
</head>
<body>
<h1>Index of /$1</h1>

<ul>
EOF

for x in `ls -p`; do
echo "<li><a href=\"$x\">$x</a></li>" >> index.html
done

echo "</ul></body></html>" >> index.html
