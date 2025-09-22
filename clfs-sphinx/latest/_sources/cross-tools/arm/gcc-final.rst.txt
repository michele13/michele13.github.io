4.9. GCC-|gcc_ver| - Final
==========================

The GCC package contains the GNU compiler collection, which includes the C compiler. 
This second build of GCC will produce the final cross compiler which will use the previously built C library.

4.9.1. Installation of GCC Cross Compiler
-----------------------------------------

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

.. Note::

    If you would like to build a C++ compiler in addition to the C compiler, change the following ``--enable-languages=c`` option 
    to be ``--enable-languages=c,c++`` instead. A C++ compiler is not required for any of the software included in this book.

.. code-block:: shell

  ../gcc-13.2.0/configure \
    --prefix=${CLFS}/cross-tools \
    --build=${CLFS_HOST} \
    --host=${CLFS_HOST} \
    --target=${CLFS_TARGET} \
    --with-sysroot=${CLFS}/cross-tools/${CLFS_TARGET} \
    --disable-nls \
    --enable-languages=c \
    --enable-c99 \
    --enable-long-long \
    --disable-libmudflap \
    --disable-multilib \
    --with-mpfr-include=$(pwd)/../gcc-13.2.0/mpfr/src \
    --with-mpfr-lib=$(pwd)/mpfr/src/.libs \
    --with-arch=${CLFS_ARM_ARCH} \
    --with-float=${CLFS_FLOAT} \
    --with-fpu=${CLFS_FPU}

**The meaning of the configure options not used previously:**

``--enable-c99``
    Enable C99 support for C programs.

``--enable-long-long``
    Enables long long support in the compiler.


Continue with compiling the package:

.. code-block:: shell

    make


Install the package:

.. code-block:: shell

    make install



4.9.2. Contents of GCC
----------------------

| **Installed programs:** gcc, and gcov
| **Installed libraries:** libgcc.a, libgcc_eh.a, and libgcc_s.so

Short Descriptions
~~~~~~~~~~~~~~~~~~


**gcc**
	The C compiler

**gcov**	
    A coverage testing tool; it is used to analyze programs to determine where optimizations will have the most effect

``libgcc``
	Contains run-time support for gcc 