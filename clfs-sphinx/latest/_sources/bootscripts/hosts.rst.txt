7.7. Customizing the /etc/hosts File
====================================

If a network card is to be configured, decide on the IP address, FQDN, and possible aliases for use in the ``/etc/hosts`` file. The syntax is::

    <IP address> myhost.example.org aliases

Unless the computer is to be visible to the Internet (i.e., there is a registered domain and a valid block of assigned IP addresses—most users 
do not have this), make sure that the IP address is in the private network IP address range. Valid ranges are::

  Class Networks
  A     10.0.0.0
  B     172.16.0.0 through 172.31.0.255
  C     192.168.0.0 through 192.168.255.255

A valid IP address could be 192.168.1.1. A valid FQDN for this IP could be ``www.linuxfromscratch.org`` 
(not recommended because this is a valid registered domain address and could cause domain name server issues).

Even if not using a network card, an FQDN is still required. This is necessary for certain programs to operate correctly. 

Create the ``/etc/hosts`` file by running:

.. code-block:: shell

  cat > ${CLFS}/targetfs/etc/hosts << "EOF"
  # Begin /etc/hosts (network card version)

  127.0.0.1 localhost
  [192.168.1.1] [<HOSTNAME>.example.org] [HOSTNAME]

  # End /etc/hosts (network card version)
  EOF

The ``[192.168.1.1]`` and ``[<HOSTNAME>.example.org]`` values need to be changed for specific users or requirements (if assigned an IP address by a 
network/system administrator and the machine will be connected to an existing network). 

If a network card is not going to be configured, create the ``/etc/hosts`` file by running: 

.. code-block:: shell

  cat > ${CLFS}/targetfs/etc/hosts << "EOF"
  # Begin /etc/hosts (no network card version)

  127.0.0.1 [<HOSTNAME>.example.org] [HOSTNAME] localhost

  # End /etc/hosts (no network card version)
  EOF