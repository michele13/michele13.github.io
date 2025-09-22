4.3. Build Variables
====================

ABI Variables
-------------

Setup for a Particular ABI: 

.. code-block:: shell
    
    export CLFS_ABI="[From Chart]"
    echo export CLFS_ABI=\""${CLFS_ABI}\"" >> ~/.bashrc

The following table gives the entires for the different ABI's that CLFS Embedded supports. Make sure you select one for your build, 
this will ensure capatibilty of your build with your target architecture. 

.. table:: **Table 4.1. List of Build Variables**
    
    ======= ==================  ========================================
    **ABI** **CLFS_ABI=Value**  **Notes**
    ======= ==================  ========================================
    O32     32                  For 32 bit CPUs only
    N32     n32                 For 64 bit CPUs operating in 32 bit mode
    N64     64                  For 64 bit CPUs operating in 64 bit mode 
    ======= ==================  ========================================


Setting Host and Target 
-----------------------

During the building of the cross-compile tools you will need to set a few variables that will be dependent on your particular needs.
You will need to set the target triplet for the target architecture, the MIPS level and the CPU endianess,
If you do not know what triplet or level you want, you can use the table as a reference. Set the command using the method listed below: 

.. code-block::

    export CLFS_HOST=$(echo ${MACHTYPE} | sed "s/-[^-]*/-cross/")
    export CLFS_TARGET=[target triplet]


.. table:: **Table 4.2. Processor Type and Target Triplets**

    ==========================  ===================   ==========
    Processor                   Target Triplet        Mips Level
    ==========================  ===================   ==========
    MIPS 32 bits Little Endian  mipsel-linux-musl     1
    MIPS 32 bits Big Endian     mips-linux-musl       1
    MIPS 64 bits Little Endian  mips64el-linux-musl   3
    MIPS 64 bits Big Endian     mips64-linux-musl     3
    ==========================  ===================   ==========



Now we will set the architecture and endianess of the CPU based on the target triplet provided above: 

.. code-block:: shell

    export CLFS_ARCH="mips"
    export CLFS_ENDIAN=$(echo ${CLFS_ARCH} | sed -e 's/mipsel/little/' -e 's/mips/big/')

Now you will need to set the MIPS LEVEL. This determines how your GCC and C library are built. There are currently 5 MIPS ISA Levels. 
To keep things simple we are only using two. For more information, see http://www.linux-mips.org/wiki/Instruction_Set_Architecture

.. code-block:: shell
    
    export CLFS_MIPS_LEVEL="[mips level]"

We also need to select the floating point capability of the CPU. If the CPU has built-in hardware for performing floating point calculations, 
choose "hard", otherwise choose "soft": 

.. code-block:: shell

    export CLFS_FLOAT="[hard or soft]"

Now we will add this to ``~/.bashrc``, just in case you have to exit and restart building later: 

.. code-block:: shell

    echo export CLFS_HOST=\""${CLFS_HOST}\"" >> ~/.bashrc
    echo export CLFS_TARGET=\""${CLFS_TARGET}\"" >> ~/.bashrc
    echo export CLFS_ARCH=\""${CLFS_ARCH}\"" >> ~/.bashrc
    echo export CLFS_ENDIAN=\""${CLFS_ENDIAN}\"" >> ~/.bashrc
    echo export CLFS_MIPS_LEVEL=\""${CLFS_MIPS_LEVEL}\"" >> ~/.bashrc
    echo export CLFS_FLOAT=\""${CLFS_FLOAT}\"" >> ~/.bashrc
