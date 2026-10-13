1.1. How to Build a CLFS System
===============================

The CLFS system will be built by using a previously installed Linux distribution (such as Debian, Fedora, Mandriva, SUSE, or Ubuntu). 
This existing Linux system (the host) will be used as a starting point to provide necessary programs, including a compiler, linker, 
and shell, to build the new system. Select the “development” option during the distribution installation to be able to access these tools.

As an alternative to installing an entire separate distribution onto your machine, you may wish to use the Linux From Scratch LiveCD. 
This CD works well as a host system, providing all the tools you need to successfully follow the instructions in this book. 
It does also contain source packages and patches for the LFS book, and a copy of the LFS book, but not the needed packages or book for CLFS.
You can still use the CD for building CLFS, but you will need to download the packages, patches and book separately. 
You can also look at http://www.linuxfromscratch.org/hints/downloads/files/lfscd-remastering-howto.txt 
for infomation on building your own CD, replacing the LFS packages and book with those for CLFS. 
Once you have the CD, no network connection or additional downloads are necessary. 
For more information about the LFS LiveCD or to download a copy, visit http://www.linuxfromscratch.org/livecd/.

:doc:`Build Directory, Packages, and Patches <../materials/chapter>` of this book describes how to create
a temporary build directory and which packages and patches need to be downloaded to build a CLFS system.
:doc:`Final Preparations<../final-preps/chapter>` discusses the setup for an appropriate working environment.
Please read :doc:`Final Preparations<../final-preps/chapter>` carefully as it explains several important issues 
the developer should be aware of before beginning to work through :doc:`Constructing Cross-Compile Tools<../part3>` and beyond.

:doc:`Constructing Cross-Compile Tools <../part3>` explains the installation of cross-compile tools 
which will be built on the host but be able to compile programs that run on the target machine. 
These cross-compile tools will be used to create the final-system. 

The process of building cross-compile tools first involves installing binutils into ${CLFS}/cross-tools, 
so that we have an asembler and a linker for our target architecture. GCC is then compiled statically and installed into ${CLFS}/cross-tools, 
this cross-compiler is used to build the libc for the final-system. The GCC cross-compiler is then rebuilt dynamically - this final 
cross-compiler is what will be used to build the final-system. 

In :doc:`Installing Basic System Software<../final-system/chapter>`, the full CLFS system is cross-compiled. The system is built using a sysroot compiler. 
Sysroot is a parameter passed to binutils and gcc that modifies its default search paths. 

To finish the installation, the CLFS-Bootscripts are set up in :doc:`Setting Up System Bootscripts<../bootscripts/chapter>`, and the kernel and boot loader are set up 
in :doc:`Making the CLFS System Bootable<../bootable/chapter>`. :doc:`The End<../the-end/chapter>` contains information on furthering the CLFS experience beyond this book. 
After the steps in this book have been implemented, the computer will be ready to reboot into the new CLFS system. 