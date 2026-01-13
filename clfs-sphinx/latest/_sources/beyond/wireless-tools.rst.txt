8.7. Wireless Tools-29
======================

Wireless Tools is the reference implementation of tools supporting the ability to manipulate the Wireless Extensions API supported by most wireless 
LAN networking drivers.

8.7.1. Installation of Wireless Tools
-------------------------------------

Wireless Tools' Makefile contains explicitly which gcc, ar, and ranlib to use. Make sure the ${CLFS}/cross-tools versions of these programs are used 
instead of the host's:

.. code-block:: shell

    sed -i s/gcc/\$\{CLFS\_TARGET\}\-gcc/g Makefile
    sed -i s/\ ar/\ \$\{CLFS\_TARGET\}\-ar/g Makefile
    sed -i s/ranlib/\$\{CLFS\_TARGET\}\-ranlib/g Makefile

Compile the package:

.. Note::

    There are options that can be passed to **make** and **make install** that will reduce the size and functionality of the Wireless Tools. 
    See the Wireless Tools INSTALL file for more information.

.. code-block:: shell

    make PREFIX=${CLFS}/targetfs/usr

Install the package:

.. code-block:: shell
    
    make install PREFIX=${CLFS}/targetfs/usr

8.7.2. Contents of Wireless Tools
---------------------------------

| **Installed programs:** iwconfig, iwevent, iwgetid, iwlist, iwpriv, and iwspy
| **Installed libraries:** libiw.so
