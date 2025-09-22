4.4. Create the Cross Tools Sysroot Directory
=============================================

Create a sysroot directory which will be used when building the cross compiler and link its ``usr`` directory to itself 
such that everything installs to the sysroot: 

.. code-block:: shell

    mkdir -p ${CLFS}/cross-tools/${CLFS_TARGET}
    ln -sfv . ${CLFS}/cross-tools/${CLFS_TARGET}/usr