3.1 About $CLFS
===============

Throughout this book, the environment variable ``CLFS`` will be used several times. It is paramount that this variable is always defined. 
It should be set to the mount point chosen for the CLFS partition. Check that the ``CLFS`` variable is set up properly with:

.. code-block:: shell

    echo ${CLFS}

Make sure the output shows the path to the CLFS partition's mount point, which is ``/mnt/clfs`` if the provided example was followed. 
If the output is incorrect, the variable can be set with:

.. code-block:: shell

    export CLFS=/mnt/clfs

Having this variable set is beneficial in that commands such as **install -d ${CLFS}/tools** can be typed literally. 
The shell will automatically replace “${CLFS}” with “*/mnt/clfs*” (or whatever the variable was set to) when it processes the command line.

Do not forget to check that ``${CLFS}`` is set whenever you leave and reenter the current working environment 
(as when doing a “su” to *root* or another user). 