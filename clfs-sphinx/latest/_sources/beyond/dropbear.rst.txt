8.6. Dropbear-2022.83
=====================

Dropbear is a relatively small SSH server and client. Dropbear has a small memory footprint suitable for memory-constrained environments, 
while still having the same features as OpenSSH. It does not depend on OpenSSL and it has a MIT style license.

Dropbear depends on zlib.

8.6.1. Installation of Dropbear
-------------------------------

Fix dropbear so it doesn't install man pages:

.. code-block:: shell

    sed -i 's/.*mandir.*//g' Makefile.in

Configure dropbear:

.. code-block:: shell

    CC="${CC} -Os" ./configure --prefix=/usr --host=${CLFS_TARGET}

.. Note::

    We are just telling dropbear to use the default configuration plus scp. For those who are more adventurous, edit options.h to further configure 
    dropbear.

.. Important::

    If you get a compile error regarding an undefined reference to ``__stack_chk_fail_local`` run **make distclean** and add **-\-disable-harden** to 
    the configure command before proceding.


Compile the package:

.. code-block:: shell

    make MULTI=1 \
    PROGRAMS="dropbear dbclient dropbearkey dropbearconvert scp"

Install the package:

.. code-block:: shell

    make MULTI=1 \
    PROGRAMS="dropbear dbclient dropbearkey dropbearconvert scp" \
    install DESTDIR=${CLFS}/targetfs

Create the directory for the dropbear key files:

.. code-block:: shell

    install -dv ${CLFS}/targetfs/etc/dropbear

8.6.2. Installation of Dropbear Bootscripts
-------------------------------------------

From the clfs-bootscripts package, install the Dropbear bootscripts:

.. code-block:: shell

    make install-dropbear DESTDIR=${CLFS}/targetfs

8.6.3. Contents of Dropbear
---------------------------

**Installed programs:** /usr/bin/dropbearmulti
