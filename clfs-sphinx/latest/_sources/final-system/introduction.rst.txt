5.1. Introduction 
=================

In this chapter, we enter the building site and start constructing the CLFS system in earnest. The installation of this software is straightforward. 
Although in many cases the installation instructions could be made shorter and more generic, we have opted to provide the full instructions for every 
package to minimize the possibilities for mistakes. The key to learning what makes a Linux system work is to know what each package is used for and why
the user (or the system) needs it. For every installed package, a summary of its contents is given, followed by concise descriptions of each program 
and library the package installed.

The order that packages are installed in this chapter needs to be strictly followed to ensure that no program accidentally acquires a path referring 
to ``${CLFS}/cross-tools`` hard-wired into it. For the same reason, do not compile packages in parallel. Compiling more than one package at a time may
save time, but it could result in a program containing a hard-wired path to ``${CLFS}/cross-tools``, which will cause the program to stop working when 
that directory is removed.

Compiling any single package using make's parallel job execution option, "-j" is OK if you want to speed up compiling any one package. 