4.3. Build Variables
====================

Setting Host and Target 
-----------------------

During the building of the cross-compile tools you will need to set a few variables that will be dependent on your particular needs.
You will need to set the target triplet for the target architecture, and the CPU architecture, the CPU floating point hardware availability, 
and (if available) the type of floating point hardware. If you do not know what values can be chosen for each of these, 
you can use the tables as a reference. 

If your processor is an ARM9, good choices include: triplet of arm-linux-musleabi, 
ARM arch of armv5t, and float of soft. ARM9 processors do not usually have hardware floating point abilities. 
If your processor is a Cortex-A series, which often have hardware floating point capability, good choices include: 
triplet of arm-linux-musleabihf, ARM arch of armv7-a, float of hard, and fpu of vfpv3-d16. 

If your target CPU has hardware floating point support (not all ARM CPUs do), then set the following CLFS_FLOAT variable to either "hard" 
or "softfp". Use "softfp" if you need to integrate binaries compiled with "soft". Use "hard" if you don't. If your target CPU does not have 
hard floating point support, set the following CLFS_FLOAT vairable to "soft". 

.. code-block:: shell

    export CLFS_FLOAT="[hard, softfp, or soft]"

If you chose either "hard" or "softfp" for CLFS_FLOAT, you now need to set which floating point hardware is actually included 
(see table below) with your ARM CPU: 

.. code-block:: shell

    export CLFS_FPU="[fpu version]"



.. table:: **Table 4.1. ARM Hard Floating Point Versions**

    ==============  =======  ============  ===========
    fpa             fpe2     fpe3          maverick
    vfp             vfpv3    vfpv3-fp16    vfpv3-d16
    vfpv3-d16-fp16  vfpv3xd  vfpv3xd-fp16  neon
    neon-fp16       vfpv4    vfpv4-d16     fpv4-sp-d16
    neon-vfpv4             
    ==============  =======  ============  ===========


Then, set the host and target triplets: 

.. code-block::

    export CLFS_HOST=$(echo ${MACHTYPE} | sed "s/-[^-]*/-cross/")
    export CLFS_TARGET=[target triplet]

.. table:: **Table 4.2. Target Triplets**

    ==============  ==================
    Float Type      Triplet
    ==============  ==================
    soft or softfp  arm-linux-musleabi
    hard            arm-linux-musleabi
    ==============  ==================


Now set the architecture of the CPU: 

.. code-block:: shell

    export CLFS_ARCH="arm"

Choose the ARM architecture (see table below):

.. code-block:: shell

    export CLFS_ARM_ARCH="[architecture]"


.. table:: **Table 4.3. ARM Archiecture Choices**

    =======  =======  =======  =======
    armv4t   armv5    armv5t   armv5te
    armv6    armv6j   armv6t2  armv6z
    armv6zk  armv6-m  armv7    armv7-a
    armv7-r  armv7-m 
    =======  =======  =======  =======

Now we will add this to ``~/.bashrc``, just in case you have to exit and restart building later: 

.. code-block:: shell

    echo export CLFS_HOST=\""${CLFS_HOST}\"" >> ~/.bashrc
    echo export CLFS_TARGET=\""${CLFS_TARGET}\"" >> ~/.bashrc
    echo export CLFS_ARCH=\""${CLFS_ARCH}\"" >> ~/.bashrc
    echo export CLFS_ARM_ARCH=\""${CLFS_ARM_ARCH}\"" >> ~/.bashrc
    echo export CLFS_FLOAT=\""${CLFS_FLOAT}\"" >> ~/.bashrc
    echo export CLFS_FPU=\""${CLFS_FPU}\"" >> ~/.bashrc
