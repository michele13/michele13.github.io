4.6. Binutils-|binutils_ver|
============================

The Binutils package contains a linker, an assembler, and other tools for handling object files.

4.6.1. Installation of Cross Binutils
-------------------------------------

It is important that Binutils be the first package compiled because both the C library and GCC perform various tests on the available linker
and assembler to determine which of their own features to enable.

The Binutils documentation recommends building Binutils outside of the source directory in a dedicated build directory: 

.. code-block:: shell

    mkdir -v ../binutils-build
    cd ../binutils-build

Prepare Binutils for compilation: 

.. code-block:: shell

  ../binutils-2.42/configure \
    --prefix=${CLFS}/cross-tools \
    --target=${CLFS_TARGET} \
    --with-sysroot=${CLFS}/cross-tools/${CLFS_TARGET} \
    --disable-nls \
    --enable-gprofng=no \
    --disable-multilib



**The meaning of the configure options:**

``--prefix=${CLFS}/cross-tools``
  This tells the configure script to prepare to install the package in the ``${CLFS}/cross-tools`` directory.

``--target=${CLFS_TARGET}``
  This creates a cross-architecture executable that creates files for ${CLFS_TARGET} but runs on the host system.
  
``--with-sysroot=${CLFS}/cross-tools/${CLFS_TARGET}``
  This tells configure that ${CLFS} is going to be the root of our system. It will now use the specified sysroot, ${CLFS}, as a prefix of the default search paths.

``--disable-nls``
  This disables internationalization as i18n is not needed for the cross-compile tools.

``--disable-multilib``
  This option disables the building of a multilib capable binutils.


Compile the package:

.. code-block:: shell
  
  make configure-host
  make

**The meaning of the make options:**

``configure-host``
    This checks the host environment and makes sure all the necessary tools are available to compile Binutils.

Install the package:

.. code-block:: shell
  
  make install


4.6.2. Contents of Binutils
---------------------------

.. .. parsed-literal::

| **Installed programs:**    addr2line, ar, as, c++filt, elfedit, gprof, ld, nm, objcopy, objdump, ranlib, readelf, size, strings, and strip
| **Installed libraries:**   libiberty.a, libbfd.[a,so], and libopcodes.[a,so]


Short Descriptions
~~~~~~~~~~~~~~~~~~

.. _addr2line:

**addr2line**
  Translates program addresses to file names and line numbers; given an address and the name of an executable, 
  it uses the debugging information in the executable to determine which source file and line number are associated
  with the address

.. _ar:

**ar**
  Creates, modifies, and extracts from archives

.. _as:

**as**
  An assembler that assembles the output of **gcc** into object files

.. _c++filt:

**c++filt**
  Used by the linker to de-mangle C++ and Java symbols and to keep overloaded functions from clashing

.. _elfedit:

**elfedit**
  Examine and modify ELF metadata within an ELF object

.. _gprof:

**gprof**
  Displays call graph profile data

.. _ld:

**ld**
  A linker that combines a number of object and archive files into a single file, relocating their data and tying up symbol references

.. _nm:

**nm**
  Lists the symbols occurring in a given object file

.. _objcopy:

**objcopy**
  Copy the contents of one object file to another

.. _objdump:

**objdump**
  Displays information about the given object file, with options controlling the particular information to display; the information shown is useful to programmers who are working on the compilation tools

.. _ranlib:

**ranlib**
  Generates an index of the contents of an archive and stores it in the archive; the index lists all of the symbols defined by archive members that are relocatable object files

.. _readelf:

**readelf**
  Displays information about ELF type binaries

.. _size:

**size**
  Lists the section sizes and the total size for the given object files

.. _strings:  

**strings**
  Outputs, for each given file, the sequences of printable characters that are of at least the specified length (defaulting to four); for object files, it prints, by default, only the strings from the initializing and loading sections while for other types of files, it scans the entire file

.. _strip:  

**strip**
  Discards symbols from object files

``libiberty``
  Contains routines used by various GNU programs, including **getopt**, **obstack**, **strerror**, **strtol**, and **strtoul**

``libbfd``
  The Binary File Descriptor library

``libopcodes``
  A library for dealing with opcodes—the “readable text” versions of instructions for the processor; it is used for building utilities like **objdump**. 

