9.1. Changing the Ownership of the CLFS System
==============================================

Throughout the book, every package has been compiled and installed as the *clfs* user. The final system should be owned by *root*.

.. Important::

    The commands on this page of the book must be performed while logged in as root. Check that ${CLFS} is still set:
    
    .. code-block:: shell
        
        echo ${CLFS}

Make *root* the owner of the entire CLFS system:

.. code-block:: shell

    chown -Rv root:root ${CLFS}/targetfs

The following file should not to belong to the *root* group, it should belong to the *utmp* group (group 13):

.. code-block:: shell
        
    chgrp -v 13 ${CLFS}/targetfs/var/log/lastlog