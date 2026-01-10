3.2. Adding the CLFS User
=========================

When logged in as user *root*, making a single mistake can damage or destroy a system. 
Therefore, we recommend building the packages as an unprivileged user.
You could use your own user name, but to make it easier to set up a clean work environment, 
create a new user called *clfs* as a member of a new group (also named *clfs*) and use this user during the installation process. 
You may need to do this as the root user:

.. code-block:: shell

    sudo groupadd clfs
    sudo useradd -s /bin/bash -g clfs -m -k /dev/null clfs

**The meaning of the command line options:**


``-s /bin/bash``
    This makes bash the default shell for user clfs.

``-g clfs``
    This option adds user clfs to group clfs.

``-m``
    This creates a home directory for clfs.

``-k /dev/null``
    This parameter prevents possible copying of files from a skeleton directory (default is /etc/skel) by changing the input location to the special null device.

``clfs``
    This is the actual name for the created group and user.

To log in as *clfs* (as opposed to switching to user *clfs* when logged in as *root*, which does not require the *clfs* user to have 
a password), give *clfs* a password. You may need to do this as the root user: 

.. code-block:: shell

    sudo passwd clfs

Grant *clfs* full access to ``${CLFS}`` by making *clfs* the directory's owner. You may need to do this as the root user: 

.. code-block:: shell

    sudo chown -Rv clfs ${CLFS}

Next, login as user *clfs*. This can be done via a virtual console, through a display manager, or with the following substitute user command: 

.. code-block:: shell

    su - clfs

The “-” instructs su to start a login shell as opposed to a non-login shell. The difference between these two types of shells 
can be found in detail in ``bash(1)`` and **info bash**.