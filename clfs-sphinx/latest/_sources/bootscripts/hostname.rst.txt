7.6. Setting Hostname
=====================

Part of the job of the bootscripts is setting the system's hostname. 
This needs to be configured in the ``/etc/HOSTNAME`` file.

Create the ``HOSTNAME`` file and enter a hostname by running:

.. code-block:: shell

    echo "[clfs]" > ${CLFS}/targetfs/etc/HOSTNAME

``[clfs]`` needs to be replaced with the name given to the computer. Do not enter the Fully Qualified Domain Name (FQDN) here. 
That information will be put in the ``/etc/hosts`` file in the next section. 