4.5. Linux-Headers-|linux_ver| 
==============================

The Linux Kernel contains a make target that installs “sanitized” kernel headers. 

4.5.1. Installation of Linux Headers
------------------------------------

For this step you will need the kernel tarball.

Install the header files that are common to all architectures: 

.. code-block:: shell

    make mrproper
    make ARCH=${CLFS_ARCH} headers
    find usr/include -type f ! -name '*.h' -delete
    cp -rv usr/include ${CLFS}/cross-tools/${CLFS_TARGET}

4.5.2. Contents of Linux-Headers 
--------------------------------


| **Installed headers:**       ${CLFS}/cross-tools/${CLFS_TARGET}/include/{asm,asm-generic,drm,linux,mtd,rdma,scsi,sound,video,xen}/\*.h

Short Descriptions
~~~~~~~~~~~~~~~~~~

``${CLFS}/cross-tools/${CLFS_TARGET}/include/{asm,asm-generic,drm,linux,mtd,rdma,scsi,sound,video,xen}/*.h``
  The Linux API headers 
