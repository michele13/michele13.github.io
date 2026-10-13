5.7. iana-etc-|iana_ver|
============================

The iana-etc package provides data for network services and protocols.

5.7.1. Installation of Iana-Etc
-------------------------------

For this package, we only need to copy the files into place:

.. code-block:: shell
    
    cp services protocols ${CLFS}/targetfs/etc

5.7.2. Contents of iana-etc
---------------------------
**Installed files:** /etc/protocols and /etc/services

Short Descriptions
~~~~~~~~~~~~~~~~~~

``/etc/protocols``
	Describes the various DARPA Internet protocols that are available from the TCP/IP subsystem

``/etc/services``
    Provides a mapping between friendly textual names for internet services, and their underlying assigned port numbers and protocol types 