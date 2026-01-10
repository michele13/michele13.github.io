5.4. libgcc-|gcc_ver|
=====================

When compiling dynamically linked software using GCC, GCC requires that libgcc be able to be loaded during runtime when executing the software. 
Hence, we must be sure to provide the final system with a copy of the libgcc we previously built for our cross tools. 

5.4.1. Installation of libgcc
-----------------------------

Install the package:

.. code-block:: shell

    cp -v ${CLFS}/cross-tools/${CLFS_TARGET}/lib/libgcc_s.so.1 ${CLFS}/targetfs/lib/

Strip libgcc to make it smaller:

.. code-block:: shell

    ${CLFS_TARGET}-strip ${CLFS}/targetfs/lib/libgcc_s.so.1

    