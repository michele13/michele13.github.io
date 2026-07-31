vii. Master Changelog
=====================

This is version GIT-20240401 of the Cross-Compiled Linux From Scratch book, dated April 01, 2024. If this book is more than six months old, a newer and better version is probably already available. To find out, please check one of the mirrors via http://trac.clfs.org/.

Below is a list of detailed changes made since the previous release of the book.

**Changelog Entries:**

* **March 25, 2024**

  * [michele13] - We can now build all busybox applets with no problems.
  * [michele13] - Added symlink /init pointing to bin/busybox in ${CLFS}/targetfs/.
  * [michele13] - Fixed instructions for unpacking gmp mpc and mpfr during the toolchain build.
  * [michele13] - Fixed instructions for building dropbear.

* **March 23, 2024**

  * [michele13] - Fixed instructions for linux kernel build.

* **March 22, 2024**

  * [michele13] - Removed Iana-etc patch.
  * [michele13] - Fixed instructions for binutils, linux-headers and Iana-etc.

* **March 21, 2024**

  * [michele13] - Updated Busybox to version 1.36.1.
  * [michele13] - Updated Dropbear to version 2022.83.
  * [michele13] - Updated musl to version 1.2.5.
  * [michele13] - Updated Binutils to version 2.42.
  * [michele13] - Updated Linux to version 6.7.4.
  * [michele13] - Updated GCC to version 13.2.0.
  * [michele13] - Updated GMP to version 6.3.0.
  * [michele13] - Updated MPC to version 1.3.1.
  * [michele13] - Updated MPFR to version 4.2.1.
  * [michele13] - Fixed download links of Iana-etc and Wireless-Tools.

* **April 19, 2019**

  * [abradford] - Fix download links for MPC and bootscripts.

* **October 12, 2017**

  * [abradford] - Many small fixes submitted by "selk" on IRC and "akhiezer" via email
  * [abradford] - Update Linux to v4.9.22
  * [abradford] - Update musl to version 1.1.16
  * [abradford] - Add new concept of "targetfs" directory parallel to the cross-tools which allows easier retaining of cross-tools across target builds
  * [abradford] - Remove utmp, wtmp, and btmp creation.

* **December 28, 2016**

  * [abradford] - Add apt-get line to INSTALL document.
  * [abradford] - Update binutils to version 2.27.
  * [abradford] - Update busybox to version 1.24.2.
  * [abradford] - Update gmp to version 6.1.1.
  * [abradford] - Update Linux to version 4.4.21.
  * [abradford] - Update mpc to version 1.0.3.
  * [abradford] - Update mpfr to version 3.1.2.
  * [abradford] - Update musl to version 1.1.15.
  * [abradford] - Update GCC to version 6.2 which removes the need for patching GCC for compatibility with musl.
  * [abradford] - Update host requirements and script for m4 and ncurses5.

* **June 13, 2014**

  * [abradford] - Allow for easier starting over of targetfs build.
  * [abradford] - Remove e2fsprogs, busybox version of utilities are good enough.
  * [abradford] - Remove iptables, untested and largely unused.
  * [abradford] - Add netplug utility to beyond.
  * [abradford] - Update binutils to v2.24.
  * [abradford] - Update busybox to v1.22.1.
  * [abradford] - Update musl to v1.0.3.
  * [abradford] - Simplify beyond sections into one section.

* **October 24, 2013**

  * [abradford] - Shorten triplets.
  * [abradford] - Reorder variable tables for easier reading.
  * [abradford] - ARM and x86 are assumed little endian.
  * [abradford] - Fix musl installation symlinking.
  * [abradford] - Fix iana-etc 'make get'.

* **October 21, 2013**

  * [abradford] - Cleanup the kernel build.
  * [abradford] - Move bootloaders into bootable section, just give recommendations no exact steps.
  * [abradford] - Create top level README and LICENSE.

* **October 18, 2013**

  * [abradford] - Fix the networking configuration to use eth0 and DHCP to obtain a valid IP address.

* **October 17, 2013**

  * [abradford] - Update dropbear to 2013.60 and fix instructions.
  * [abradford] - Assorted docbook updates for common pages.
  * [abradford] - Reorganize things people don't need to read into the preface and things that really should be read into the chapters.
  * [abradford] - Delete hostapd and lib-nl.
  * [abradford] - Delete dependencies information, most of it was wrong or outdated and so long as you follow the book in order there's no issues.

* **October 16, 2013**

  * [abradford] - Remove uClibc, use musl-libc.
  * [abradford] - Build cross compiler completely separate from target file system.
  * [abradford] - Build GMP, MPFR, and MPC within GCC tree.
  * [abradford] - Linewrap many configure switches for easier reading and editing.

* **August 12, 2013**

  * [abradford] - Don't copy libiberty.h from binutils.
  * [abradford] - Install linux headers directly without cp.
  * [abradford] - Revert install of headers to cross-tools.

* **July 24, 2013**

  * [abradford] - Install headers to cross-tools.
  * [abradford] - Fix binutils build issue with some Texinfo.

* **June 17, 2013**

  * [abradford] - Change partitioning to creating build dir.

* **June 13, 2013**

  * [abradford] - Remove WRT arch.

* **June 11, 2013**

  * [abradford] - Many package updates.
  * [abradford] - Removal of some LFS specific information.
  * [abradford] - Update host requirements to at least Debian Squeeze.
  * [kterrell] - Removal of sources from final tarball.

* **September 22, 2012**

  * [abradford] - Small fixes to prologue and ch 1 and 2.

* **September 13, 2012**

  * [ljump] - Fix System.map depmod command.
  * [ljump] - Fix console and null /dev node creation for final system.

* **September 02, 2012**

  * [William Harrington] - Fix uClibc patch MD5 sum.

* **August 24, 2012**

  * [William Harrington] - Change Beyond Net hostapd page to include bootscript and configuration sections.

* **August 22, 2012**

  * [William Harrington] - Change Beyond Net Dropbear page and edit the installation of bootscripts section.
  * [William Harrington] - Remove bash reference in hostreqs version script to use $SHELL variable.

* **August 08, 2012**

  * [William Harrington] - Update version check script to find the libc version with hosts that use paths other than /lib and /lib64, such as multiarch distro.

* **May 14, 2011**

  * [abradford] - Updated /etc/mdev.conf to Alpine Linux's example to provide a better baseline example.
  * [abradford] - Reverted changes that removed the mknod'ing of /dev/console and /dev/null. These nodes may be needed on some systems for proper booting.
  * [abradford] - Added Wireless Tools package to Beyond Networking section. Thanks to Ivan Castell Rovira for providing a set of instructions for the installation of this package.
  * [abradford] - Fixed some Dropbear issues with symlinks and directory naming.

* **April 20, 2011**

  * [abradford] - Created a Beyond section just for extra libraries and moved zlib into it.

* **April 19, 2011**

  * [abradford] - Created a Beyond section just for networking tools.
  * [abradford] - Created a Beyond section just for file system tools and moved e2fsprogs into it.

* **April 8, 2011**

  * [jciccone] - Cleaned up the acknowledgements page.

* **March 31, 2011**

  * [abradford] - Updated BusyBox to version 1.18.4.
  * [abradford] - Updated GCC to version 4.6.0.
  * [abradford] - Updated MPC to version 0.9.
  * [abradford] - Updated zlib to version 1.2.5.
  * [abradford] - Updated Linux kernel to version 2.6.38.2.
  * [abradford] - Require Gawk 3.1 or greater because of Iana-Etc requirements.
  * [abradford] - Updated "What Now?" section to include CBLFS link. Thanks go to Adrian Grigo.
  * [abradford] - Link ${CLFS}/etc/init.d/rcS to ${CLFS}/etc/rc.d/startup so that BusyBox's init can find the startup scripts.
  * [abradford] - Updated mdev configuration such that video output is disabled by default to ensure no errors if video is not available.

* **March 23, 2011**

  * [abradford] - Remove mknod commands as mdev takes care of creating all required entries in /dev automatically.
  * [abradford] - Moved change ownership section to be as late in the book as possible and only operate on a copy of the file system.

* **March 18, 2011**

  * [abradford] - Copy libgcc library to target as it's needed by at least e2fsprogs.

* **March 7, 2011**

  * [abradford] - Added optional information for building C++ compiler.
  * [abradford] - Updated bootscripts install target and package contents to match current bootscripts.

* **February 24, 2011**

  * [abradford] - Added --disable-multilib to GCC builds.

* **February 10, 2011**

  * [abradford] - Changed GCC Static and Final to build GCC for ${CLFS_ABI} for ARM and MIPS, ${CLFS_CPU} for x86. This removes the need for using the ${BUILD} variable when building packages.
  * [abradford] - Updated Resources section.

* **January 30, 2011**

  * [abradford] - Updated MPFR download link.
  * [abradford] - Updated GCC to version 4.5.2.
  * [abradford] - Updated Binutils to version 2.21.
  * [abradford] - Added information to GCC's configure options.
  * [abradford] - Updated Iana-Etc to use more up-to-date data.

* **Janurary 10, 2011**

  * [jciccone] - Changes Submitted By Andrew Bradford via the CLFS-Dev Mailing List. Updated E2fsprogs to 1.41.14 and changed some configure switches for uClibc compatibility.

* **November 28, 2010**

  * [jciccone] - Updated BusyBox to 1.17.3.
  * [jciccone] - Updated uClibc to 0.9.31.

* **November 21, 2010**

  * [jciccone] - Added MPC 0.8.2.
  * [jciccone] - Updated GCC to 4.5.1.
  * [jciccone] - Updated Binutils to 2.20.1.
  * [jciccone] - Updated MPFR to 3.0.0.
  * [jciccone] - Updated GMP to 5.0.1.
  * [jciccone] - Updated the Linux Kernel to 2.6.36.
  * [jciccone] - Make sure we change CLFS_HOST before we set it. Also make sure that CLFS_HOST gets saved to the bashrc.

* **November 8, 2008**

  * [jciccone] - Updated Busybox to 1.12.1.
  * [jciccone] - Updated uClibc to 0.9.30-rc3.

* **November 8, 2008**

  * [jciccone] - Dropped the uClibc Headers Page.
  * [jciccone] - Updated GCC to 4.3.2.
  * [jciccone] - Updated Binutils to 2.19.

* **Janurary 9, 2008**

  * [jciccone] - Updated Busybox to 1.8.2.

* **November 5, 2006**

  * [jim] - Start of CLFS Embedded Development.

