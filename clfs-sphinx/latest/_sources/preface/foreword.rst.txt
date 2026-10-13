i. Foreword
===========

The Linux From Scratch Project has seen many changes in the few years of its existence. I personally became involved with the project in 2000, around the time of the 3.x releases. At that time, the build process was to create static binaries with the host system, then chroot and build the final binaries on top of the static ones.

Later came the use of the /static directory to hold the initial static builds, keeping them separated from the final system, then the PureLFS process developed by Ryan Oliver and Greg Schafer, introducing a new toolchain build process that divorces even our initial builds from the host. Finally, LFS 6 bought Linux Kernel 2.6, the udev dynamic device structure, sanitized kernel headers, and other improvements to the Linux From Scratch system.

The one "flaw" in LFS is that it has always been based on an x86 class processor. With the advent of the Athlon 64 and Intel EM64T processors, the x86-only LFS is no longer ideal. Throughout this time, Ryan Oliver developed and documented a process by which you could build Linux for any system and from any system, by use of cross-compilation techniques. Thus, the Cross-Compiled LFS (CLFS) was born.

CLFS Embedded follows the same guiding principles the LFS project has always followed, e.g., knowing your system inside and out by virtue of having built the system yourself. Additionally, during a CLFS Embedded build, you will learn advanced techniques such as cross-build toolchains, and how to create a smaller footprint system supporting architectures such as ARM and MIPS, in addition to x86.

We hope you enjoy building your own CLFS Embedded system, and the benefits that come from a system tailored to your needs.

| --
| Jim Gifford, CLFS Project Co-leader (Page Author)
| Jeremy Utley, CLFS 1.x Release Manager (Page Author)
| Ryan Oliver, CLFS Project Co-leader
| Joe Ciccone, Justin Knierim, Chris Staub, Matt Darcy, Ken Moffat,
| Maarten Lankhorst, Zack Winkles, Manuel Canales Esparcia, Michele Bucca
| Nathan Coulson, and Andrew Bradford - CLFS Developers
