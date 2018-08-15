Sprite Creator v1.1.0.2
~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2006-2007 Jaros³aw Szatkowski jarekfall
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
With this program you can create graphical files for the Fallout Tactics game. These
files have an extension "spr". Creating the sprites is very simple, there is almost no
chance of application crush. The application won't let you to do an incorrect action.
Attention! The application may crush only if you will be editing files created by
fans, with other unoficial editors, which create files that have an incorrect (wrong)
structure.

I suggest you to compress files only after finishing work on certain sprite.
Compression process is time consuming, lasts as long as a compression to "zip" format
with the option "best compression method" but it gives better compression quality.

Sprite Creator is provided as FREEWARE, but only for private, non-commercial, home use.

Any suggestions and comments are welcome. In case of bugs and problems please send an
e-mail to: jarekfall@vp.pl including a description of the problem.

Please visit my site, where you can download other applications/files:
http://members.lycos.co.uk/jarekfall

TABLE OF CONTENTS:

1. SYSTEM REQUIREMENTS
2. Informations
3. Creating an alpha channel in the Adobe Photoshop
4. Decreasing number of colours
5. Description of special actions
6. Importing bitmaps with help of the batch processing

1. SYSTEM REQUIREMENTS:
=======================
Minimum: Pentium MMX compatible processor, Windows NT operating system, monitor and
video card capable of displaying 1024x768 16 bit colours, 32MB of RAM, about 100MB of
available hard-disk space.

Recommended: Intel Pentium 4 compatible processor, Windows XP and at least DirectX 8.1
installed, 32 bit video card with accelerator and 32 bit texture buffer, 256MB of RAM.

Note: In this program version, DirectX isn't required.

2. Informations
===============
In the SPR file each layer of given images' collection contains one colours' palette
consisting of 256 colours, so all 24 bit images which you created and intended for
one of collection's layers must have common (one) 256 colours' palette or sum of
all colours of all images mustn't exceed 256 colours. Before you enter into
creating images plan out number of directions which images will be having.
Counts:
1 images' collection = 1 to 4 layers
1 layer = (1 to 32 directions of one image) * (1 to n images)

Imported images must be 32 bit uncompressed bitmaps with an alpha channel. Image's
colours which in image's mask have black colour, will be ignored on importing. Each time
you import a new bitmap in the program, new colours are added into layer's colours'
palette and it's checked if in palette are present identical colours with bitmap's
colours.

3. Creating an alpha channel in the Adobe Photoshop
===================================================
Prepare image and select these pixels, which have to be visible. Save the selection
as an alpha channel. White colour in an alpha channel means that image's pixels aren't
transparent and a black means that image's pixels won't be displayed. You can create
transparent pixels to smooth image's edges, shading a little white edges in an alpha
channel, don't brighten up the black colour because it's a background's mask. An alpha
channel helps selecting the image, the best way to do this is to use tool called "Wand".
First you have to set parameters for this tool, turn off "Anti-aliased", "Contiguous"
and set a tolerance to 1. Use the wand on a black colour in an alpha channel and a menu
option "Select -> Inverse". Now you can darken and brighten up pixels in the selection
without fear.

Setting properties of an alpha channel.
---------------------------------------
Double click on alpha channel, in the field "Colour" choose a colour for
a background, in the field "Opacity" type 100%. Now if you click on the channel
visibility field, a background colour will change and transparent pixels will be
visible.

4. Decreasing number of colours
===============================
When you prepare all images for one of collection's layers in planned out directions
number, create a bitmap of a large size and RGB type, of colour for a background taken
from one of prepared images. Copy all these images and paste them to the large image.
Change large's image type to 8 bpp with colours' palette, then all images will be
having the same palette. Now you have two ways for preparing 32 bpp bitmaps to import
them to the application:
1. Select each image in the large image (you can copy an alpha channel to this image,
create the selection and move it on proper position) and copy it to the image from
which you cut it.
2. Export large's image colours' palette. Load each bitmap and convert it to 8 bpp
bitmap, use option "Custom..." and load the palette from file, now convert a bitmap
to RGB type.
In both cases RGB images must be saved as 32 bit bitmaps.

5. Description of special actions
=================================
STOP(1 arg) - Stops playing a sequence for a period of time, defined in the first
parameter, expressed in milliseconds.
TIME OF DISPLAYING(1 arg) - Time of displaying of each image, defined in the first
parameter, expressed in milliseconds. Values below 71 ms are ignored by the game.
REPEAT ALL - Jump to the beginning of a sequence (the frame with index 0).
JUMP(1 arg) - Jump to a frame with index, defined in the first parameter.
OVERLAY - Commands to display simultaneously sequence, which has the same name and
additionally ends the word "Overlay".
STEP LEFT - Character put the left foot.
STEP RIGHT - Character put the right foot.
HIT - Attacked object receives injuries.
FIRE(3 arg) - Character shoots a projectile. Three parameters define offset of an
initial point (x,y,z) of the projectile. The parameter 1: offset along axis X,
parameter 2: offset along axis Y, parameter 3: offset along axis Z. Offsets can be
negative numbers.
SOUND - Playing a corresponding sound to the executed sequence.
PICK UP - Character picked up an object.

6. Importing bitmaps with help of the batch processing
======================================================
Batch processing is intended for immediate creation of images' collection. This means
that repeated bitmap loading to the same collection will cause removal of earlier loaded
images. All images must be ready before importing. Are allowed only names of type:
0*.bmp, 1*.bmp, 2*.bmp, ..., 10*.bmp, ..., 100*.bmp, ...,1000*.bmp, ... or
00*.bmp, 01*.bmp, 02*.bmp, ..., 10*.bmp, ..., 100*.bmp, ...,1000*.bmp, ... or
000*.bmp, 001*.bmp, 002*.bmp, ..., 010*.bmp, ..., 100*.bmp, ...,1000*.bmp, ...,
where * means any count of any characters.
Create a new collection and mark it or mark one of existing. Click on the button with the
caption "Import" and choose the number of layer to which you want to import bitmaps. Then
open a bitmap which you want to load as the first. Remaining bitmaps with greater numbers,
from the same directory will be loaded automatically. If you will choose a collection and
a layer that possesses some bitmaps, then they will be removed automatically from this
layer and layer's colours palette will be removed too.
Important is the order of bitmaps in this folder. First, must appear all directions
of the first image, next, all directions of the second image, etc.