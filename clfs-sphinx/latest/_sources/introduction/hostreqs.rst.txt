1.2 Host System Requirements
============================

You should be able to build a CLFS system from just about any recent Linux distrubtion. Your host system should have the following software with the minimum versions indicated. Also note that many distributions will place software headers into separate packages, often in the form of “[package-name]-devel” or “[package-name]-dev”. Be sure to install those if your distribution provides them. 



* **Bash-4.0**
* **Binutils-2.20**
* **Bzip2-1.0.5**
* **Coreutils-8.1**
* **Diffutils-3.0**
* **Findutils-4.4.0**
* **Gawk-3.1**
* **GCC-4.4**
* **Glibc-2.11**
* **Grep-2.6**
* **Gzip-1.3**
* **M4-1.4.16**
* **Make-3.81**
* **ncurses5**
* **libelf from Elfutils**
* **libssl from OpenSSL**
* **Flex**
* **Bc**
* **Patch-2.6**
* **Sed-4.2.1**
* **Sudo-1.7.4p4**
* **Tar-1.23**
* **Texinfo-4.13**

To see whether your host system has all the appropriate versions, run the following:

.. code-block:: shell

    cat > version-check.sh << "EOF"
    #!/bin/bash

    # Simple script to list version numbers of critical development tools
    set -e
    bash --version | head -n1 | cut -d" " -f2-4
    echo -n "Binutils: "; ld --version | head -n1 | cut -d" " -f3-
    bzip2 --version 2>&1 < /dev/null | head -n1 | cut -d" " -f1,6-
    echo -n "Coreutils: "; chown --version | head -n1 | cut -d")" -f2
    diff --version | head -n1
    find --version | head -n1
    gawk --version | head -n1
    gcc --version | head -n1
    ldd $(which ${SHELL}) | grep libc.so | cut -d ' ' -f 3 | ${SHELL} | head -n 1 \
    | cut -d ' ' -f 1-10
    grep --version | head -n1
    gzip --version | head -n1
    m4 --version | head -n1
    make --version | head -n1
    echo "#include <ncurses.h>" | gcc -E - > /dev/null
    echo "#include <openssl/ssl2.h>" | gcc -E - > /dev/null
    echo "#include <libelf.h>" | gcc -E - > /dev/null
    patch --version | head -n1
    sed --version | head -n1
    sudo -V | head -n1
    tar --version | head -n1
    makeinfo --version | head -n1
    flex --version | head -n1
    bc --version | head -n1

    EOF

    bash version-check.sh