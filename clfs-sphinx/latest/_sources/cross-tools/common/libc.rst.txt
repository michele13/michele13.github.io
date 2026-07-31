4.8. musl-1.2.5 
===============

The musl package contains the main C library. This library provides the basic routines for allocating memory, searching directories, 
opening and closing files, reading and writing files, string handling, pattern matching, arithmetic, and so on.

4.8.1. Installation of musl
---------------------------

Configure the package:

.. code-block:: shell

  ./configure \
    CROSS_COMPILE=${CLFS_TARGET}- \
    --prefix=/ \
    --target=${CLFS_TARGET}

Compile the package:

.. code-block:: shell

    make

Install the package:

.. code-block:: shell

    DESTDIR=${CLFS}/cross-tools/${CLFS_TARGET} make install
    
4.8.2 Installation of libssp_nonshared.a
----------------------------------------

Create a C file that includes a function required to build programs, like dropbear, that
require stack protection.

.. code-block:: shell

  cat > __stack_chk_fail_local.c << "EOF"
  extern void __stack_chk_fail(void);
  void __attribute__((visibility ("hidden"))) __stack_chk_fail_local(void) { __stack_chk_fail(); }
  EOF


Compile the code:

.. code-block:: shell
  
  ${CLFS_TARGET}-gcc -fpie -c __stack_chk_fail_local.c -o __stack_chk_fail_local.o
  ${CLFS_TARGET}-ar r libssp_nonshared.a __stack_chk_fail_local.o


Copy the library:

.. code-block:: shell

  cp libssp_nonshared.a ${CLFS}/cross-tools/${CLFS_TARGET}/lib/

.. _contents-musl:

4.8.3. Contents of musl
-----------------------


| **Installed Programs:**   ld-musl.so.0
| **Installed Libraries:**  libc.so.0, libcrypt.so.0, libdl.so.0, libm.so.0, libpthread.so.0, librt.so.0
| **Installed Headers:**    To be written...

Short Descriptions
~~~~~~~~~~~~~~~~~~

.. _ld-musl:

**ld-musl**
    The musl dynamic linker / loader

``libc``
	The C library

``libcrypt``	
    The cryptographic library

``libdl``
	The musl dynamic linker / loader library

``libm``
	The math library

``libpthread``
	The POSIX thread library

``librt``
	The clock and timer library 