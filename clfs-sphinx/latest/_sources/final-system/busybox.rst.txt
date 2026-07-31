5.6. BusyBox-|busybox_ver|
==========================

BusyBox combines tiny versions of many common UNIX utilities into a single small executable. 
It provides replacements for most of the utilities you usually find in GNU fileutils, shellutils, etc. 
The utilities in BusyBox generally have fewer options than their full-featured GNU cousins; however, 
the options that are included provide the expected functionality and behave very much like their GNU counterparts. 
BusyBox provides a fairly complete environment for any small or embedded system. ù


5.6.1. Installation of BusyBox
------------------------------

First ensure the BusyBox source is completely clean:

make distclean

.. Note::

    We tell BusyBox to use the generic defconfig. For those who are more adventurous, you can use **make menuconfig**, 
    and create a custom or modified configuration for your build.


The following tells BusyBox to use the default configuration:

.. code-block:: shell

    make ARCH="${CLFS_ARCH}" defconfig

Disable the use of utmp/wtmp as musl does not support them:

.. code-block:: shell

    sed -i 's/\(CONFIG_FEATURE_WTMP\)=y/# \1 is not set/' .config
    sed -i 's/\(CONFIG_FEATURE_UTMP\)=y/# \1 is not set/' .config

Compile the package:

.. code-block:: shell

    make ARCH="${CLFS_ARCH}" CROSS_COMPILE="${CLFS_TARGET}-"

Install the package:

.. code-block:: shell

    make ARCH="${CLFS_ARCH}" CROSS_COMPILE="${CLFS_TARGET}-" \
    CONFIG_PREFIX="${CLFS}/targetfs" install
    ln -sv bin/busybox ${CLFS}/targetfs/init

If you're going to build your kernel with modules, you will need to make sure depmod.pl is available for your host to execute:

.. code-block:: shell

    cp -v examples/depmod.pl ${CLFS}/cross-tools/bin
    chmod -v 755 ${CLFS}/cross-tools/bin/depmod.pl

5.6.2. Contents of BusyBox
--------------------------

**Installed programs:** To be Written
