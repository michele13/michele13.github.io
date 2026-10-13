9.2. Copy to Target
===================

We just created a cleaned-up version of our build, now compress it so it can be archived and transferred to the target.

Create a tarball of the build:

.. code-block:: shell

    install -dv ${CLFS}/build
    cd ${CLFS}/targetfs
    tar jcfv ${CLFS}/build/clfs-embedded.tar.bz2 *

Now you can move your compressed tarball to your target system. This will be different on every embedded device.

When uncompressing the tarball, make sure to pass tar the "-p" switch to ensure permissions are preserved. 