################################################################################
#
# syslinux to make target msdos/iso9660 filesystems bootable
#
################################################################################

SYSLINUX_VERSION = 6.02
SYSLINUX_SOURCE = syslinux-$(SYSLINUX_VERSION).tar.xz
SYSLINUX_SITE = $(BR2_KERNEL_MIRROR)/linux/utils/boot/syslinux

SYSLINUX_LICENSE = GPLv2+
SYSLINUX_LICENSE_FILES = COPYING

SYSLINUX_INSTALL_IMAGES = YES

SYSLINUX_DEPENDENCIES = host-nasm host-util-linux host-upx

ifeq ($(BR2_TARGET_SYSLINUX_LEGACY_BIOS),y)
SYSLINUX_TARGET = bios
endif

ifeq ($(BR2_TARGET_SYSLINUX_EFI),y)
ifeq ($(BR2_ARCH_IS_64),y)
SYSLINUX_EFI_BITS = efi64
else
SYSLINUX_EFI_BITS = efi32
endif # 64-bit
SYSLINUX_DEPENDENCIES += gnu-efi
SYSLINUX_TARGET = $(SYSLINUX_EFI_BITS)
endif # EFI

# The syslinux tarball comes with pre-compiled binaries.
# Since timestamps might not be in the correct order, a rebuild is
# not always triggered for all the different images.
# Cleanup the mess even before we attempt a build, so we indeed
# build everything from source.
define SYSLINUX_CLEANUP
	rm -rf $(@D)/bios $(@D)/efi32 $(@D)/efi64
endef
SYSLINUX_POST_PATCH_HOOKS += SYSLINUX_CLEANUP

# syslinux build system has no convenient way to pass CFLAGS,
# and the internal zlib should take precedence so -I shouldn't
# be used.
define SYSLINUX_BUILD_CMDS
	$(TARGET_MAKE_ENV) $(MAKE1) CC="$(HOSTCC) -idirafter $(HOST_DIR)/usr/include $(HOST_LDFLAGS)" \
	    AR="$(HOSTAR)" SYSROOT=$(STAGING_DIR) -C $(@D) $(SYSLINUX_TARGET)
endef

# While the actual bootloader is compiled for the target, several
# utilities for installing the bootloader are meant for the host.
# Repeat the target, otherwise syslinux will try to build everything
# Repeat CC and AR, since syslinux really wants to check them at
# install time
define SYSLINUX_INSTALL_TARGET_CMDS
	$(TARGET_MAKE_ENV) $(MAKE1) CC="$(HOSTCC) -idirafter $(HOST_DIR)/usr/include $(HOST_LDFLAGS)" \
	    AR="$(HOSTAR)" SYSROOT=$(STAGING_DIR) INSTALLROOT=$(HOST_DIR) \
	    -C $(@D) $(SYSLINUX_TARGET) install
endef

SYSLINUX_IMAGES-$(BR2_TARGET_SYSLINUX_ISOLINUX) += bios/core/isolinux.bin
SYSLINUX_IMAGES-$(BR2_TARGET_SYSLINUX_PXELINUX) += bios/core/pxelinux.bin
SYSLINUX_IMAGES-$(BR2_TARGET_SYSLINUX_MBR) += bios/mbr/mbr.bin
SYSLINUX_IMAGES-$(BR2_TARGET_SYSLINUX_EFI) += $(SYSLINUX_EFI_BITS)/efi/syslinux.efi

SYSLINUX_C32 = $(call qstrip,$(BR2_TARGET_SYSLINUX_C32))

# We install the c32 modules from the host-installed tree, where they
# are all neatly installed in a single location, while they are
# scattered around everywhere in the build tree.
define SYSLINUX_INSTALL_IMAGES_CMDS
	for i in $(SYSLINUX_IMAGES-y); do \
		$(INSTALL) -D -m 0755 $(@D)/$$i $(BINARIES_DIR)/syslinux/$${i##*/}; \
	done
	for i in $(SYSLINUX_C32); do \
		$(INSTALL) -D -m 0755 $(HOST_DIR)/usr/share/syslinux/$${i} \
				   $(BINARIES_DIR)/syslinux/$${i}; \
	done
endef

$(eval $(generic-package))
