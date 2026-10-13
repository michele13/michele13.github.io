1.4. Help
=========

If an issue or a question is encountered while working through this book, check the FAQ page at http://trac.clfs.org/wiki/faq#generalfaq. 
Questions are often already answered there. If your question is not answered on this page, try to find the source of the problem. 
The following hint will give you some guidance for troubleshooting: http://www.linuxfromscratch.org/hints/downloads/files/errors.txt. 

We also have a wonderful CLFS community that is willing to offer assistance through the mailing lists and IRC (see the :doc:`Section 1.3, “Resources” <resources>`).
However, we get several support questions everyday and many of them can be easily answered by going to the FAQ and by searching the mailing
lists first. So for us to offer the best assistance possible, you need to do some research on your own first. 
This allows us to focus on the more unusual support needs. If your searches do not produce a solution, please include all relevant
information (mentioned below) in your request for help. 

1.4.1. Things to Mention
------------------------

Apart from a brief explanation of the problem being experienced, the essential things to include in any request for help are:

* The version of the book being used (in this case CLFS Embedded |version|)
* The host distribution and version being used to create CLFS.
* The architecture of the host and target.
* The value of the ${CLFS_TARGET}, and ${BUILD} environment variables.
* The package or section in which the problem was encountered.
* The exact error message or symptom received. See :ref:`Section 1.4.3, “Compilation Problems” <ch-intro-askforhelp-compilation-problems>` below for an example.
* Note whether you have deviated from the book at all. A package version change or even a minor change to any command is considered deviation.

.. :Note::

    Deviating from this book does not mean that we will not help you. 
    After all, the CLFS project is about personal preference. Be upfront about any changes to the established 
    procedure—this helps us evaluate and determine possible causes of your problem.

1.4.2. Configure Script Problems
--------------------------------

If something goes wrong while running the **configure** script, review the ``config.log`` file. This file may contain the errors you 
encountered during configure. It often logs errors that may have not been printed to the screen. 
Include only the relevant lines if you need to ask for help. 

.. _ch-intro-askforhelp-compilation-problems:

1.4.3. Compilation Problems
---------------------------

Both the screen output and the contents of various files are useful in determining the cause of compilation problems. 
The screen output from the **configure** script and the **make** run can be helpful. It is not necessary to include the entire output,
but do include enough of the relevant information. Below is an example of the type of information to include from the screen output 
from **make**::

    gcc -DALIASPATH=\"/mnt/clfs/usr/share/locale:.\"
    -DLOCALEDIR=\"/mnt/clfs/usr/share/locale\"
    -DLIBDIR=\"/mnt/clfs/usr/lib\"
    -DINCLUDEDIR=\"/mnt/clfs/usr/include\" -DHAVE_CONFIG_H -I. -I.
    -g -O2 -c getopt1.c
    gcc -g -O2 -static -o make ar.o arscan.o commands.o dir.o
    expand.o file.o function.o getopt.o implicit.o job.o main.o
    misc.o read.o remake.o rule.o signame.o variable.o vpath.o
    default.o remote-stub.o version.o opt1.o
    -lutil job.o: In function `load_too_high':
    /clfs/tmp/make-3.79.1/job.c:1565: undefined reference
    to `getloadavg'
    collect2: ld returned 1 exit status
    make[2]: *** [make] Error 1
    make[2]: Leaving directory `/clfs/tmp/make-3.79.1'
    make[1]: *** [all-recursive] Error 1
    make[1]: Leaving directory `/clfs/tmp/make-3.79.1'
    make: *** [all-recursive-am] Error 2

In this case, many people would just include the bottom section::

    make [2]: *** [make] Error 1

This is not enough information to properly diagnose the problem because it only notes that something went wrong, not what went wrong. 
The entire section, as in the example above, is what should be saved because it includes the command that was executed and the associated 
error message(s).

An excellent article about asking for help on the Internet is available online at http://catb.org/~esr/faqs/smart-questions.html. 
Read and follow the hints in this document to increase the likelihood of getting the help you need. 