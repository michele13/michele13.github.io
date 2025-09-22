7.5. Creating /etc/inittab 
==========================

Is the file that specifices how to boot and shutdown a system.

Now we will create the inittab file for use with our system, please note that if you'd like a login prompt on a serial console to uncomment 
nabling of this and verify the serial port device name as many embedded boards have serial ports which are not named 'ttyS':

.. code-block:: shell
    
    cat > ${CLFS}/targetfs/etc/inittab<< "EOF"
    # /etc/inittab

    ::sysinit:/etc/rc.d/startup

    tty1::respawn:/sbin/getty 38400 tty1
    tty2::respawn:/sbin/getty 38400 tty2
    tty3::respawn:/sbin/getty 38400 tty3
    tty4::respawn:/sbin/getty 38400 tty4
    tty5::respawn:/sbin/getty 38400 tty5
    tty6::respawn:/sbin/getty 38400 tty6

    # Put a getty on the serial line (for a terminal).  Uncomment this line if
    # you're using a serial console on ttyS0, or uncomment and adjust it if using a
    # serial console on a different serial port.
    #::respawn:/sbin/getty -L ttyS0 115200 vt100

    ::shutdown:/etc/rc.d/shutdown
    ::ctrlaltdel:/sbin/reboot
    EOF