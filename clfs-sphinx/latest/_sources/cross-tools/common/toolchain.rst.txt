4.10. ToolChain Variables
-------------------------

Setup target-specific variables for the compiler, linker, and other compile-time tools. For the compiler and linker,
use the target file system directory as a sysroot rather than the sysroot we setup before for the cross-tools. 
This time we write them to ``~/.bashrc`` so that they persist even if the clfs user logs out:

.. code-block:: shell

    echo export CC=\""${CLFS_TARGET}-gcc --sysroot=${CLFS}/targetfs\"" >> ~/.bashrc
    echo export CXX=\""${CLFS_TARGET}-g++ --sysroot=${CLFS}/targetfs\"" >> ~/.bashrc
    echo export AR=\""${CLFS_TARGET}-ar\"" >> ~/.bashrc
    echo export AS=\""${CLFS_TARGET}-as\"" >> ~/.bashrc
    echo export LD=\""${CLFS_TARGET}-ld --sysroot=${CLFS}/targetfs\"" >> ~/.bashrc
    echo export RANLIB=\""${CLFS_TARGET}-ranlib\"" >> ~/.bashrc
    echo export READELF=\""${CLFS_TARGET}-readelf\"" >> ~/.bashrc
    echo export STRIP=\""${CLFS_TARGET}-strip\"" >> ~/.bashrc
    source ~/.bashrc