5.2. Creating Directories
=========================

It is time to create some structure in the target CLFS file system. Create a standard directory tree by issuing the following commands: 

.. code-block:: shell

    mkdir -pv ${CLFS}/targetfs/{bin,boot,dev,etc,home,lib/{firmware,modules}}
    mkdir -pv ${CLFS}/targetfs/{mnt,opt,proc,sbin,srv,sys}
    mkdir -pv ${CLFS}/targetfs/var/{cache,lib,local,lock,log,opt,run,spool}
    install -dv -m 0750 ${CLFS}/targetfs/root
    install -dv -m 1777 ${CLFS}/targetfs/{var/,}tmp
    mkdir -pv ${CLFS}/targetfs/usr/{,local/}{bin,include,lib,sbin,share,src}

Directories are, by default, created with permission mode 755, but this is not desirable for all directories. 
In the commands above, two changes are made—one to the home directory of user *root*, and another to the directories for temporary files. 

The first mode change ensures that not just anybody can enter the ``/root`` directory—the same as a normal user would do with his or her home 
directory. The second mode change makes sure that any user can write to the ``/tmp`` and ``/var/tmp`` directories, but cannot remove another user's 
files from them. The latter is prohibited by the so-called “sticky bit,” the highest bit (1) in the 1777 bit mask. 

5.2.1. FHS Compliance Note
--------------------------

The directory tree is based on the Filesystem Hierarchy Standard (FHS) (available at http://refspecs.linuxfoundation.org/fhs.shtml).
