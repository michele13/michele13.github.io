7.2. CLFS-Bootscripts-|bootscripts_ver| 
=======================================

The CLFS-Bootscripts package contains a set of scripts to start/stop the CLFS system at bootup/shutdown.

7.2.1. Installation of CLFS-Bootscripts
---------------------------------------


.. Important::

    Unlike other chapters, after installing the bootscripts, do not delete the bootscripts source directory. 
    The bootscripts source directory may be needed later.

Install the package:

.. code-block:: shell

    make DESTDIR=${CLFS}/targetfs install-bootscripts


7.2.2. Contents of CLFS-Bootscripts
-----------------------------------

**Installed scripts:** functions, startup, shutdown, and syslog.

Short Descriptions
~~~~~~~~~~~~~~~~~~

**functions**
	Contains common functions, such as error and status checking, that are used by several bootscripts

**startup**
    Performs all startup script operations

**shutdown**	
    Performs all shutdown operations

**syslog**
	Starts and stops the system log daemons 