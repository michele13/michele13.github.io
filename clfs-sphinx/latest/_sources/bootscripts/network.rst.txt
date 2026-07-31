7.8. Configuring the network Script 
===================================

Which interfaces are brought up and down by the network utilities depends on the files and directories in the ``/etc/network`` directory. 
The ``interfaces`` file should contain a description of the interfaces, as done by Debian, and each of the directories contain scripts for actions 
to perform on each type of network event.

The following command creates the required directories and the ``interfaces`` file, assuming DHCP will be used for eth0:

.. code-block:: shell

    mkdir -pv ${CLFS}/targetfs/etc/network/if-{post-{up,down},pre-{up,down},up,down}.d
    mkdir -pv ${CLFS}/targetfs/usr/share/udhcpc

    cat > ${CLFS}/targetfs/etc/network/interfaces << "EOF"
    auto eth0
    iface eth0 inet dhcp
    EOF

For DHCP to work properly with udhcpc, the BusyBox dhcp client, a configuration script is needed. 
Create a simple script to assign the provided DHCP address and update ``/etc/resolv.conf``: 

.. code-block:: shell

    cat > ${CLFS}/targetfs/usr/share/udhcpc/default.script << "EOF"
    #!/bin/sh
    # udhcpc Interface Configuration
    # Based on http://lists.debian.org/debian-boot/2002/11/msg00500.html
    # udhcpc script edited by Tim Riker <Tim@Rikers.org>

    [ -z "$1" ] && echo "Error: should be called from udhcpc" && exit 1

    RESOLV_CONF="/etc/resolv.conf"
    [ -n "$broadcast" ] && BROADCAST="broadcast $broadcast"
    [ -n "$subnet" ] && NETMASK="netmask $subnet"

    case "$1" in
            deconfig)
                    /sbin/ifconfig $interface 0.0.0.0
                    ;;

            renew|bound)
                    /sbin/ifconfig $interface $ip $BROADCAST $NETMASK

                    if [ -n "$router" ] ; then
                            while route del default gw 0.0.0.0 dev $interface ; do
                                    true
                            done

                            for i in $router ; do
                                    route add default gw $i dev $interface
                            done
                    fi

                    echo -n > $RESOLV_CONF
                    [ -n "$domain" ] && echo search $domain >> $RESOLV_CONF
                    for i in $dns ; do
                            echo nameserver $i >> $RESOLV_CONF
                    done
                    ;;
    esac

    exit 0
    EOF

    chmod +x ${CLFS}/targetfs/usr/share/udhcpc/default.script