8.4. Zlib-1.3.1
===============

The Zlib package contains compression and decompression routines used by some programs.

8.4.1. Installation of Zlib
---------------------------

Prepare Zlib for compilation and set to optimize for size: 

.. code-block:: shell
    
    CFLAGS="-Os" ./configure --shared

**The meaning of the configure options:**


**--shared**
    Tells Zlib to build its shared library.

Compile the package:

.. code-block:: shell

    make

Install the package into the cross-tools: 

.. code-block:: shell

    make prefix=${CLFS}/cross-tools/${CLFS_TARGET} install


Copy only the shared library into the target file system and ensure that its symlink is present so the runtime loader can find it:

.. code-block:: shell

    cp -v ${CLFS}/cross-tools/${CLFS_TARGET}/lib/libz.so.1.3.1 ${CLFS}/targetfs/lib/
    ln -sv libz.so.1.3.1 ${CLFS}/targetfs/lib/libz.so.1

8.4.2. Contents of Zlib
-----------------------

**Installed libraries:** libz.[a,so]

Short Descriptions
~~~~~~~~~~~~~~~~~~

``libz``
	Contains compression and decompression functions used by some programs 