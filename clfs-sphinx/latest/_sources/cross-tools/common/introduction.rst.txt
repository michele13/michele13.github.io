4.1. Introduction
=================

This chapter shows you how to create cross platform tools.

If for some reason you have to stop and come back later, remember to use the **su - clfs** command, and it will setup the build environment that you left. 

4.1.1. Common Notes
-------------------

.. Important::
    Before issuing the build instructions for a package, the package should be unpacked as user *clfs*, 
    and a **cd** into the created directory should be performed. The build instructions assume that the **bash** shell is in use. 

Several of the packages are patched before compilation, but only when the patch is needed to circumvent a problem or supply a 
default configuration. Warning messages about offset or *fuzz* may also be encountered when applying a patch. 
Do not worry about these warnings, as the patch was still successfully applied. 

During the compilation of most packages, there will be several warnings that scroll by on the screen. These are normal and can safely 
be ignored. These warnings are as they appear—warnings about deprecated, but not invalid, use of the C or C++ syntax. 
C standards change fairly often, and some packages still use the older standard. This is not a problem, but does prompt the warning. 

.. Important::
    After installing each package, both in this and the next chapters, delete its source and build directories, 
    unless specifically instructed otherwise. 

