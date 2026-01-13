4.3. Build Variables
====================

Setting Host and Target 
-----------------------

During the building of the cross-compile tools you will need to set a few variables that will be dependent on your particular needs.
You will need to set the target triplet for the target architecture, and the CPU type. If you do not know what triplet or CPU type you want,
you can use the table as a reference. Set the command using the method listed below: 

.. code-block:: shell

    export CLFS_HOST=$(echo ${MACHTYPE} | sed "s/-[^-]*/-cross/")
    export CLFS_TARGET=[target triplet]
    export CLFS_CPU=[cpu type]



.. table:: **Table 4.1. Processor Type and Target Triplets**

    ==================================  ==================  ============  =============================
    **Processor**                       **Target Triplet**  **CPU Type**  **Note**
    ==================================  ==================  ============  =============================
    486 Compatibles                     i486-linux-musl     i486          Intel's i486		
    Pentium, K6, 586 Compatibles        i586-linux-musl     i586          Intel Pentium without MMX
    Pentium II, Pentium III, Pentium 4  i686-linux-musl     i686	      PentiumPro instruction set 
    Athlon                              i686-linux-musl     athlon        AMD 32 bit Athlon
    Opteron                             x86_64-linux-musl   k8            AMD K8 processors with x86-64
    ==================================  ==================  ============  =============================

Now set the architecture of the CPU: 

.. code-block:: shell

    export CLFS_ARCH="x86"

Now we will add this to ``~/.bashrc``, just in case you have to exit and restart building later: 

.. code-block:: shell

    echo export CLFS_HOST=\""${CLFS_HOST}\"" >> ~/.bashrc
    echo export CLFS_TARGET=\""${CLFS_TARGET}\"" >> ~/.bashrc
    echo export CLFS_ARCH=\""${CLFS_ARCH}\"" >> ~/.bashrc
    echo export CLFS_CPU=\""${CLFS_CPU}\"" >> ~/.bashrc

