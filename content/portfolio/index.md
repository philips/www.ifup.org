---
layout: page
header: Work Portfolio
title: portfolio
group: navigation
---

This portfolio represents my best work and supplements my [resume](http://ifup.org/resume.txt)

## Rackspace

<img class="alignleft" src="/images/200px-Rackspace_logo.svg.png" alt="Rackspace Fanatiguy" />

I worked at San Francisco Rackspace and helped the teams previously known as
Cloudkick integrate and build new products for Rackspace. I started at
Rackspace as the "Engineer of Developer Happiness" and I built systems and
tools to keep developers happy, keep development buzzing along and get code
deployed as quickly as possible.

Later I worked with the Rackspace Cloud Monitoring team to get the on-server
monitoring agent built and into customer's hands. This required a lot of
interesting engineering work mostly in C and lua. Along the way we contributed
to a platform called [luvit][luvit] and all of [agent code][virgo] is open
source too.

[luvit]: http://luvit.io
[virgo]: http://github.com/racker/virgo

## SuSE Labs

<img class="alignright" src="/images/pdx-geeko-small.jpg" alt="Portland Geeko" />

I worked for SuSE Labs, part of Novell, to maintain enterprise Kernels,
improve the Linux Plumbing and make openSUSE rock!

Work inside the labs included:

- acl and attr utilities
- network driver maintanence for SLE
- video4linux maintainanence
- improving v4l in the commmunity
- packaging and patching tools within SLE/openSUSE

There is a great ethos within the company and SUSE Labs to do the right
thing in the community. Which means I got to work on upstream code when
I wasn't too busy with SLE.

## IBM Linux Technology Center Internship (2006)

<img class="alignleft" src="/images/tux-genetic.png" alt="Genetic Tux " />

Genetic algorithms have been applied to a variety search problems in computer
science.  It was my task, during the summer of 2006, to apply a genetic
algorithm to the O(1) CPU scheduler and dynamically tune it to improve
throughput.  Although the results of this experiment were inconclusive, the
experience of writing Kernel patches, improving the genetic library, working
with Jake Moilanen, and going to the Ottawa Linux Symposium secured my interest
in the Linux Kernel.  Furthermore, I had the opportunity to contribute a number
of [patches](http://ifup.org/patches/autotest/) and testsuites for
[autotest](http://test.kernel.org/autotest), a new testing framework for the
Linux kernel.

- [Abstract  of my summer work](http://ifup.org/files/genetic-cpu-abstract.txt)
- [Genetic Library Patchset](http://ifup.org/git/?p=genetic-cpu.git)
- [Final report to Oregon State](http://ifup.org//files/brandon-philips-summer-internship.pdf)

## NASA Goddard Robotics Internship (2005)

<a href="http://ban.smugmug.com/gallery/8094568_Thtns"><img
class="alignright" src="/images/motion3.png" alt="binary difference of hand moving" /></a>

This motion history image of my hand represents the great amount of work I put
into creating a hand tracking and recognition program while working at
Anthrotronix.  In ten weeks I had a working demo of tracking a human hand and
using that as a computer, or robot, input device.

Also during the internship I had a <em>hand</em> in the design of the
electronics and software for ARCHIE, a robot chassis for human interface
experiments, which will serve Anthrontronix as a platform for experimenting
with their multitude of interface devices.  To demonstrate the robot we
interfaced it with Anthrontronix's
[weapon mounted joystick](http://ban.smugmug.com/gallery/8094568_Thtns/1/527488824_Gbb3Y/Medium)

## OHSU 9-Button

Reed eVentures and OHSU contacted me in mid-2004 about writing a daemon that
would run on Windows, Linux and Mac OS X to control communications between
several testing applications and a USB HID device called a 9-button.  I worked
as a contractor to develop this software against changing requirements and
delivered a stable dependable daemon which compiled and ran on all three
platforms.  Both customers were pleased with the results.

The source code from this project is licensed under the [MIT
license](http://ifup.org/git/?p=ninebutton.git;a=blob;h=6fd19536c3ea9eea06704e4e774779c75603155d;hb=f45d1d5fa3f1840b7ed5ef1609799384a9763f44;f=tcpusb/LICENSE)
and can be found [here](http://ifup.org/git/?p=ninebutton.git;a=summary).  It
is a good example of using libusb, pthreads and sockets; and provides the
framework necessary for compilation on the three major platforms.

## Bob v2.0

<a href="http://ban.smugmug.com/gallery/8096134_K4gof"><img
class="alignleft"
alt="Bob v2.0 robot from shoulders up"
src="/images/bob-servo-thumb.jpg" /></a> 

Developing the software for this project was challenging and fun!  Over the
course of several months I worked on integrating all of the control and sensor
components together into a scripting language, debugging tools and GUI control
interface that helped the team win 1st place and  Judges&#8217; Choice at the
RI/SME competition in Rochester NY in 2003.

<br />
<br />
<br />

## Publications

- [The 2007 Linux Storage and File Systems
  Workshop](http://lwn.net/Articles/226351/)- A summary of the [LSF
  2007](http://www.usenix.org/events/lsf07/) workshop I wrote for [Linux Weekly
  News](http://lwn.net), which aims to be the premier news and information source
  for the free software community.

- [The Humanoid
  Dream](http://ban.smugmug.com/gallery/8096736_r8QRz#527642442_8nH2U) - In
  January 2004 I published an article about my high school robotics experience
  that was accepted by [Servo](http://servomagazine.com), an internationally
  distributed monthly robotics magazine.

## Recorded Talks
- [Six Weeks to Robot](http://ifup.org/2008/02/09/six-weeks-to-robot-at-ignite-portland/) - <a href="http://igniteportland.com">Ignite Portland 2</a>

## Conference Talks

- [One tiny daemon to harvest your server statistics (and
  more)](http://www.oscon.com/oscon2012/public/schedule/detail/24412) - This
  was an introduction to the Open Source on-server agent that we are building
  for the Cloud Monitoring product. The audience was very enthusiastic about
  this being open sourced.  [Slides](http://ifup.org/slides/virgo-oscon-2012/)

- [Logging as Event
  Streams](http://www.oscon.com/oscon2012/public/schedule/detail/26386) - The
  logging infrastructure on the Rackspace Cloud Monitoring product has been
  designed just as well as the rest of the system. This is an overview of the
  tools we use and the philosophy we follow around logging.
  [Slides](http://ifup.org/slides/logging-as-event-streams-oscon-2012/#1)

- [libuv: The Power Underneath
  Node.js](http://opensourcebridge.org/sessions/920) - libuv is the event loop
  library that powers node.js and luvit. This was an introduction to the
  concepts of the library.
  [Slides](http://ifup.org/slides/logging-as-event-streams-oscon-2012/#1)

- [An Introduction to Luvit](http://opensourcebridge.org/sessions/760) - Luvit
  is a platform built on libuv and luajit that I am participating in and that
  we are using in the Rackspace Cloud Monitoring Agent.
  [Slides](http://ifup.org/slides/luvit-osb/#1)

- [Building an embedded Linux system monitoring
  device](http://opensourcebridge.org/sessions/61) - As a Kernel developer I
  spend alot of my day looking at syslogs and rebooting systems. So, I set off to
  automate the process and you, the audience, will get an introduction to
  building ARM software and network device drivers. Slides
  [here](http://ifup.org/~philips/review/osb-2009-philips-w5100-embededded-linux.odp)

- [The video4linux user-space: libv4l2, applications and a
  server](http://linuxplumbersconf.org/2008/program/speakers/getspeaker.php?speaker=bphilips.txt)-
  With the merging of the gspca driver sans in-Kernel decompression in 2.6.27
  it has become necessary to start working with upstream application developers
  to ensure that they can support the proliferation of new frame and compression
  formats. Earlier this month Hans de Geode started this work and created
  libv4l2: a low level wrapper around existing V4L IOCTLs. Having a user space
  library sitting between applications and the Kernel opens up the possibility
  for doing a fairly simple V4L server that can allow sharing of frames between
  multiple applications: like sound servers ALSA dmix or PulseAudio.

## Press Mentions
- [Scanned copies](http://ban.smugmug.com/Portfolio) of newspapers, newsletters and magazines
- Barometer <a href="http://barometer.orst.edu/vnews/display.v/ART/2006/01/27/43d9d8d460171">Installfest4 to introduce ‘freedom’ to computers</a>
- Barometer <a href="http://barometer.orst.edu/vnews/display.v/ART/2006/01/10/43c41b68112ff">Google gives pizza</a>
- New4Neighbors <a href="http://www.news4neighbors.net/article.pl?sid=05/10/03/195242">OSU, Bus Project and POSSE Join Forces!</a>
- Newsforge <a href="http://trends.newsforge.com/trends/05/10/07/1833225.shtml?tid=138&#038;tid=132">Open Source and politics ride on the same bus</a>
- OSU Press Release  <a href="http://oregonstate.edu/dept/ncs/newsarch/2005/Jun05/intern.htm">INTERNSHIPS MAY AID COMPUTER USERS, CHILDREN WITH DISABILITIES</a>
- RIT News and Events <a href="http://www.rit.edu/~930www/NewsEvents/2003/May01/photos.html">A face only a motherboard could love</a>
- Mozillazine <a href="http://mozillazine.org/talkback.html?article=7603">&#8216;Firefox One&#8217; Balloon Satellite Launch a Success</a>



