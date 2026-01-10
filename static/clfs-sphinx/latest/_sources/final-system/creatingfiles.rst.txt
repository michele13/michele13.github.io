5.3. Creating the passwd, group, and lastlog Files 
==================================================

A proper Linux system maintains a list of the mounted file systems in the file ``/etc/mtab``. 
With the way our embedded system is designed, we will be using a symlink to ``/proc/mounts``: 

.. code-block:: shell

    ln -svf ../proc/mounts ${CLFS}/targetfs/etc/mtab

In order for user *root* to be able to login and for the name “root” to be recognized, there must be relevant entries in the ``/etc/passwd`` and 
``/etc/group`` files. 

.. code-block:: shell

    cat > ${CLFS}/targetfs/etc/passwd << "EOF"
    root::0:0:root:/root:/bin/ash
    EOF

The actual password for *root* (the “::” used here is just a placeholder and allow you to login with no password) will be set later. 

**Additional optional users you may want to add:**


``bin:x:1:1:bin:/bin:/bin/false``
    Can be useful for compatibility with legacy applications.

``daemon:x:2:6:daemon:/sbin:/bin/false``
    It is often recommended to use an unprivileged User ID/Group ID for daemons in order to limit their access to the system.

``adm:x:3:16:adm:/var/adm:/bin/false``
    Was used for programs that performed administrative tasks.

``lp:x:10:9:lp:/var/spool/lp:/bin/false``
    Used by programs for printing.

``mail:x:30:30:mail:/var/mail:/bin/false``
    Often used by email programs.

``news:x:31:31:news:/var/spool/news:/bin/false``
    Often used for network news servers.

``uucp:x:32:32:uucp:/var/spool/uucp:/bin/false``
    Often used for Unix-to-Unix Copy of files from one server to the next

``operator:x:50:0:operator:/root:/bin/ash``
    Often used to allow system operators to access the system.

``postmaster:x:51:30:postmaster:/var/spool/mail:/bin/false``
    Generally used as an account that receives all the information of troubles with the mail server.

``nobody:x:65534:65534:nobody:/:/bin/false``
    Used by NFS.


Create the ``/etc/group`` file by running the following command: 

.. code-block:: shell

    cat > ${CLFS}/targetfs/etc/group << "EOF"
    root:x:0:
    bin:x:1:
    sys:x:2:
    kmem:x:3:
    tty:x:4:
    tape:x:5:
    daemon:x:6:
    floppy:x:7:
    disk:x:8:
    lp:x:9:
    dialout:x:10:
    audio:x:11:
    video:x:12:
    utmp:x:13:
    usb:x:14:
    cdrom:x:15:
    EOF

**Additional optional groups you may want to add**


``adm:x:16:root,adm,daemon``
    All users in this group are allowed to do administrative tasks

``console:x:17:``
    This group has direct access to the console

``cdrw:x:18:``
    This group is allowed to use the CDRW drive

``mail:x:30:mail``
    Used by MTAs (Mail Transport Agents)

``news:x:31:news``
    Used by Network News Servers

``uucp:x:32:uucp``
    Used by the Unix-to-Unix copy users

``users:x:100:``
    The default GID used by shadow for new users

``nogroup:x:65533:``
    This is a default group used by some programs that do not require a group

``nobody:x:65534:``
    This is used by NFS


The created groups are not part of any standard—they are groups decided on in part by the requirements of BusyBox later in this chapter, 
and in part by common convention employed by a number of existing Linux distributions. The Linux Standard Base (LSB, available at 
http://www.linuxbase.org) recommends only that, besides the group *root* with a Group ID (GID) of 0, a group *bin* with a GID of 1 be present. 
All other group names and GIDs can be chosen freely by the system administrator since well-written programs do not depend on GID numbers, 
but rather use the group's name.

The **login**, **agetty**, and **init** programs (and others) use the lastlog file to record information such as who was logged into the system and 
when. However, these programs will not write to the lastlog file if it does not already exist. Initialize the lastlog file and give it proper 
permissions: 

.. code-block:: shell

    touch ${CLFS}/targetfs/var/log/lastlog
    chmod -v 664 ${CLFS}/targetfs/var/log/lastlog