iv. Typography
==============

To make things easier to follow, there are a few typographical conventions used throughout this book. This section contains some examples of the typographical format found throughout Linux From Scratch.

.. code:: shell

  ./configure --prefix=/usr


This form of text is designed to be typed exactly as seen unless otherwise noted in the surrounding text. It is also used in the explanation sections to identify which of the commands is being referenced. ::
  
  install-info: unknown option '--dir-file=/mnt/clfs/usr/info/dir'

This form of text (fixed-width text) shows screen output, probably as the result of commands issued. This format is also used to show filenames, such as /etc/ld.so.conf.

*Emphasis*

This form of text is used for several purposes in the book. Its main purpose is to emphasize important points or items.

http://clfs.org/

This format is used for hyperlinks, both within the CLFS community and to external pages. It includes HOWTOs, download locations, and websites.

.. code-block:: shell

  cat > ${CLFS}/etc/group << "EOF"
  root:x:0:
  bin:x:1:
  ......
  EOF


This format is used when creating configuration files. The first command tells the system to create the file ``${CLFS}/etc/group`` from whatever is typed on the following lines until the sequence end of file (EOF) is encountered. Therefore, this entire section is generally typed as seen.

*[REPLACED TEXT]*

This format is used to encapsulate text that is not to be typed as seen or copied-and-pasted.

``passwd(5)``

This format is used to refer to a specific manual page (hereinafter referred to simply as a “man” page). The number inside parentheses indicates a specific section inside of **man**. For example, **passwd** has two man pages. **man passwd** will print the first man page it finds that matches “passwd”, which will be ``/usr/share/man/man1/passwd.1``. For this example, you will need to run **man 5 passwd** in order to read the specific page being referred to. It should be noted that most man pages do not have duplicate page names in different sections. Therefore, **man [program name]** is generally sufficient. 