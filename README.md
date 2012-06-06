momentnode 0.0.0
================

receive a momentum's ecstream and forward it somewhere

What:
-----
forward-tcp.js:
  forward ecstream request

fake-momentum.js:
  serve ecstream request.
  broke ecstream into single email files in mail/ directory

watch-mail.js:
  watch for new file in "spool/" directory and send a mail


How:
----
node fake-momentum.js

node forward-tcp.js 

node watch-mail.js


Todo:
-----
watch-mail.js: read file and send via SMTP


Licence:
--------
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Ale <bayois@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
