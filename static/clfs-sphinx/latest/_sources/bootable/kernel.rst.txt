6.3. Linux-|linux_ver|
======================

The Linux package contains the Linux kernel.

6.3.1. Installation of the kernel
---------------------------------

Building the kernel involves a few steps—configuration, compilation, and installation. Read the ``README`` file in the kernel source tree for alternative 
methods to the way this book configures the kernel.

Prepare for compilation by running the following command:

.. code-block:: shell

    make mrproper

This ensures that the kernel tree is absolutely clean. The kernel team recommends that this command be issued prior to each kernel compilation. 
Do not rely on the source tree being clean after un-tarring.

A good starting place for setting up the kernel configuration is to use a *defconfig*. This will set the base configuration to a good state that takes 
your target system architecture into account.

To list the all available default configuratinons available use this command: 

.. code-block:: shell

    ARCH=${CLFS_ARCH} make help | grep defconfig


Then run **make [your default configuration]** to generate the ``.config`` file.

Configure the kernel via a menu-driven interface. Be sure to enable DEVTMPFS so that ``/dev`` will be populated automatically. 

.. Note::

    Since you are building for an embedded system make sure all key components are built into the kernel and not as modules. 
    The key components are console/video, disk, and network. Without these built in, the system will not function properly. It is recommended 
    to configure the kernel without modules in order to conserve disk space and to reduce the complexity of booting. 

.. code-block:: shell

    make ARCH=${CLFS_ARCH} CROSS_COMPILE=${CLFS_TARGET}- menuconfig

Alternatively, the **make oldconfig** may be more appropriate in some situations. See the ``README`` file for more information. 

If desired, skip kernel configuration by copying the kernel config file, ``.config``, from an example system (assuming it is available) to the root 
directory of the unpacked kernel sources. 

.. Note::
    
    If you are using the u-boot bootloader, creating a uImage type kernel is recommended. Install the u-boot tools (not documented here) and append
    "uImage" when compiling the kernel. 


Compile the configured kernel image and modules: 

.. code-block:: shell

    make ARCH=${CLFS_ARCH} CROSS_COMPILE=${CLFS_TARGET}-

If using kernel modules, an ``/etc/modprobe.conf`` file may be 
needed. Information pertaining to modules and kernel configuration 
is located in the kernel documentation in the ``Documentation`` 
directory of the kernel sources tree. Also, ``modprobe.conf(5)`` may
be of interest.

If building modules, install the modules: 

.. code-block:: shell

    make ARCH=${CLFS_ARCH} CROSS_COMPILE=${CLFS_TARGET}- \  
        INSTALL_MOD_PATH=${CLFS}/targetfs modules_install

The kernel configuration file ``.config`` produced by the **make menuconfig** step above contains all the configuration selections for the kernel 
that was just compiled. It is a good idea to keep this file for future reference. 

The resulting kernel will be located within the ``arch/${CLFS_ARCH}/boot``. There may be more than one version of the same kernel, simply with different 
compression or bootloader helpers added. Follow your bootloader's instructions on how to copy the kernel to the final system. 

6.3.2. Contents of Linux
------------------------

**Installed files:** .config, Image files, and System.map

Short Descriptions
~~~~~~~~~~~~~~~~~~

``.config``
    Contains all the configuration selections for the kernel

``zImage, uImage, bzImage, vmlinux``
	The compiled Linux kernel.

``System.map``
    A list of addresses and symbols; it maps the entry points and addresses of all the functions and data structures in the kernel. 
    Useful for debugging, sometimes. 