4.7. GCC-|gcc_ver| - Static
===========================

The GCC package contains the GNU compiler collection, which includes the C compiler. This build of GCC is mainly done so that the C library can be built next.

4.7.1. Installation of Cross GCC Compiler with Static libgcc and no Threads
---------------------------------------------------------------------------

GCC requires the GMP, MPFR, and MPC packages to either be present on the host or to be present in source form within the gcc source tree. 
Unpack these into the GCC directory after unpacking GCC:

.. code-block:: shell

    tar xf ../mpfr-4.2.1.tar.xz
    mv -v mpfr-4.2.1 mpfr
    tar xf ../gmp-6.3.0.tar.xz
    mv -v gmp-6.3.0 gmp
    tar xf ../mpc-1.3.1.tar.gz
    mv -v mpc-1.3.1 mpc

The GCC documentation recommends building GCC outside of the source directory in a dedicated build directory:

.. code-block:: shell

    mkdir -v ../gcc-build
    cd ../gcc-build

Prepare GCC for compilation:

.. code-block:: shell

  ../gcc-13.2.0/configure \
    --prefix=${CLFS}/cross-tools \
    --build=${CLFS_HOST} \
    --host=${CLFS_HOST} \
    --target=${CLFS_TARGET} \
    --with-sysroot=${CLFS}/cross-tools/${CLFS_TARGET} \
    --disable-nls  \
    --disable-shared \
    --without-headers \
    --with-newlib \
    --disable-decimal-float \
    --disable-libgomp \
    --disable-libmudflap \
    --disable-libssp \
    --disable-libatomic \
    --disable-libquadmath \
    --disable-threads \
    --enable-languages=c \
    --disable-multilib \
    --with-mpfr-include=$(pwd)/../gcc-13.2.0/mpfr/src \
    --with-mpfr-lib=$(pwd)/mpfr/src/.libs \
    --with-abi=${CLFS_ABI} \
    --with-arch=mips${CLFS_MIPS_LEVEL} \
    --with-float=${CLFS_FLOAT} \
    --with-endian=${CLFS_ENDIAN}


**The meaning of the configure options:**

``--prefix=${CLFS}/cross-tools``
    This tells the configure script to prepare to install the package in the ``${CLFS}/cross-tools`` directory.

``--build=${CLFS_HOST}``
    This tells the configure script the triplet to use to build GCC. It will use ${CLFS_HOST} as that's where it's being built.

``--host=${CLFS_HOST}``
    This tells the configure script the triplet of the machine GCC will be executed on when actually cross compiling. It will use ${CLFS_HOST} as that's where GCC will execute when cross compiling software later.

``--target=${CLFS_TARGET}``
    This tells the configure script the triplet of the machine GCC will build executables for. It will use ${CLFS_TARGET} so that software compiled with this version of GCC can be executed on the embedded machine target.

``--with-sysroot=${CLFS}/cross-tools/${CLFS_TARGET}``
    This tells configure that ${CLFS}/cross-tools/${CLFS_TARGET} is going to be the temporary root of our system. 
    It will now use the specified sysroot as a prefix of the default search paths.

``--disable-nls``
    This disables internationalization as i18n is not needed for the cross-compile tools.

``--disable-shared``
    Disables the creation of the shared libraries.

``--without-headers``
    Tells configure to not use any headers from any C libraries. This is needed as we haven't yet built the C library and to prevent influence from the host environment.

``--with-newlib``
    Tells configure to build libgcc without needing any C libraries.

``--disable-decimal-float``
    Tells configure to disable IEEE 754-2008 decimal floating point support. Decimal floating point support isn't needed yet.

``--disable-libgomp``
    Tells configure to not build the GOMP run-time libraries. GOMP is the GNU implementation of OpenMP, a API for shared-memory parallel programming.

``--disable-libmudflap``
    Tells configure to not build libmudflap. Mudflap is a library that can be used to help check for proper pointer usage.

``--disable-libssp``
    Tells configure not to build run-time libraries for stack smashing detection.

``--disable-libatomic``
    Tells configure not to build atomic operations.

``--disable-libquadmath``
    Tells configure not to build quad math operations.

``--disable-threads``
    This will prevent GCC from looking for the multi-thread include files, since they haven't been created for this architecture yet. GCC will be able to find the multi-thread information after the glibc headers are created.

``--enable-languages=c``
    This option ensures that only the C compiler is built.

``--disable-multilib``
    This option specifies that multiple target libraries should not be built.

``--with-mpfr-include=$(pwd)/../gcc-13.2.0/mpfr/src``
    Tells configure how to find the mpfr headers.

``--with-mpfr-lib=$(pwd)/mpfr/src/.libs``
    Tells configure to use the mpfr libraries built within the GCC build directory. This happens automatically but is needed to prevent GCC from searching the host's normal library paths.

``--with-abi=${CLFS_ABI}``
    This option sets the ABI selected earlier.

``--with-arch=mips${CLFS_MIPS_LEVEL}``
    This option sets the ARM architecture selected earlier. 

``--with-float=${CLFS_FLOAT}``
    This option sets the floating point mode selected earlier.

``--with-endian=${CLFS_ENDIAN}``
    This option sets the endianess of the CPU selected earlier. GCC's configure scripts may not be able to determine the endianess based only 
    on the target triplet (as other architectures do). 


Continue with compiling the package:

.. code-block:: shell

    make all-gcc all-target-libgcc

Install the package:

.. code-block:: shell

    make install-gcc install-target-libgcc

Details on this package are located in :ref:`Section 4.9.2, “Contents of GCC.”<contents-gcc>`
