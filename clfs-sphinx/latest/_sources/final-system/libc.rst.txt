5.5. musl-|musl_ver|
====================

The musl package contains the main C library. This library provides the basic routines for allocating memory, searching directories, 
opening and closing files, reading and writing files, string handling, pattern matching, arithmetic, and so on. We build it again here so that it can 
be installed into our targetfs sysroot but this time we only build the shared object version.

5.5.1. Installation of musl
---------------------------

Configure the package:

.. code-block:: shell

    ./configure \
    CROSS_COMPILE=${CLFS_TARGET}- \
    --prefix=/ \
    --disable-static \
    --target=${CLFS_TARGET}

Compile the package:

.. code-block:: shell

    make


Install just the shared library:

.. code-block:: shell

    DESTDIR=${CLFS}/targetfs make install-libs


Details on this package are located in :ref:`Section 4.8.2, “Contents of musl.”<contents-musl>`
