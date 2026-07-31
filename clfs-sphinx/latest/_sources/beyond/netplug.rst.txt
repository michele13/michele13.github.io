8.5. Netplug-1.2.9.2
====================

Netplug is a daemon that detects insertion and removal of network cables and reacts to bring up or take down the network interface.

8.5.1. Installation of Netplug
------------------------------

Patch netplug to fix issues:

.. code-block:: shell

    patch -Np1 -i ../netplug-1.2.9.2-fixes-1.patch

Compile the package:

.. code-block:: shell
    
    make


Install the package:

.. code-block:: shell

    make DESTDIR=${CLFS}/targetfs install


8.5.2. Installation of Netplug Bootscripts
------------------------------------------

From the clfs-bootscripts package, install the Netplug bootscripts:

.. code-block:: shell

    make install-netplug DESTDIR=${CLFS}/targetfs

8.5.3. Contents of Netplug
--------------------------

**Installed programs:** /sbin/netplugd
