6.2. Creating the /etc/fstab File
=================================

The ``/etc/fstab`` file is used by some programs to determine where file systems are to be mounted by default, in which order, and which must be 
checked (for integrity errors) prior to mounting. For our embedded system, the bootloader will tell Linux where to find the root file system and we 
will not mount any additional file systems, so we can create an empty file system table like this: 

.. code-block:: shell

    cat > ${CLFS}/targetfs/etc/fstab << "EOF"
    # file-system  mount-point  type   options          dump  fsck
    EOF

You may add any other file systems, such as swap or other partitions or network file systems, to this fstab if you wish.