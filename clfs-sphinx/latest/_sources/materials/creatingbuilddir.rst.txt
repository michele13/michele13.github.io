2.2 Creating Build and Sources Directories
==========================================

Create a directory for the CLFS build. The exact location is up to you but depending on the location you choose, you may need to do this as the root user:

.. code-block:: shell

    sudo mkdir -p /mnt/clfs

Assign it to the `CLFS` environment variable:

.. code-block:: shell

    export CLFS=/mnt/clfs

Ensure that this new directory has permissions that are not too restrictive such that you can write to it as a non-root user. Depending on the location of the CLFS directory, you may need to do this as the root user:

.. code-block:: shell

    sudo chmod 777 ${CLFS}

Downloaded packages and patches will need to be stored somewhere that is conveniently available throughout the entire build. A working directory is also required to unpack the sources and build them. ${CLFS}/sources can be used both as the place to store the tarballs and patches and as a working directory.

Create a directory to store the sources:

.. code-block:: shell

    mkdir -v ${CLFS}/sources