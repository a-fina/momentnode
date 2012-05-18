momentnode 0.0.0
================

receive a momentum's ecstream and forward it somewhere

What:
-----
forward-tcp.js:
  forward engine request

fake-momentum.js:
  serve engine request.
  broke ecstream into single emails in mail/ directory

watch-mail.js:
  watch for new file in mail/ directory

How:
----
node fake-momentum.js

node forward-tcp.js 

node watch-mail.js


Todo:
-----
watch-mail.js: read file and send via SMTP
