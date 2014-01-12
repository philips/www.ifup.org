{
	"disqus_url": "http://www.ifup.org/2009/01/15/freedomhec-taipei-wrap-up-notes/index.html",
	"disqus_title": "FreedomHEC Taipei Wrap-up Notes",

	"Title": "FreedomHEC Taipei Wrap-up Notes",
	"Pubdate": "2009-01-15",
	"Topics": [
		"Development"
	],

	"Slug": "freedomhec-taipei-wrap-up-notes",
	"Section": "post",
}
<a
href="http://ban.smugmug.com/gallery/8095979_qdbTW#527589610_6PSzH"><img
title="FreedomHEC Taipei"
src="http://ifup.org/images/freedomhec-taipei-sign.jpg" alt="FreedomHEC Taipei
Sign" width="320" height="240" /></a>[/caption] 

FreedomHEC Taipei is a conference where hardware engineers are invited to learn
how easy it is to make their hardware work with Linux. This was the first year
for the event and it took place on November 20-21, 2008 in Taipei, Taiwan. 
Support from the Linux Foundation and the Institute for Information Industry
made the event possible.

The event was attended by 165 people representing 41 companies. Speakers
covered a large range of topics including X.org graphics drivers, input
devices, and how to work with the Kernel community. Next year I hope we can
involve more local speakers, provide translators and offer tutorial sessions.

It was a great experience organizing this years event and I would like to give
a hearty thanks to everyone involved. I look forward to helping improve the
event next year if everyone is interested :D<strong></strong>

<strong>Improvements for 2009</strong>
<ul>
<li>Continue to focus on getting people who are doing Windows driver work at Acer, ASUS, VIA, etc.</li>
<li>Advertise in chipset trade magazines - could help with above</li>
<li>Blogging brought in several good local people. More blogging about the event next year.</li>
<li>Workshops
<ul>
<li>How to write a driver (like Greg KH's). Perhaps patch up QEMU to provide a simple USB device so we can show people how to write device drivers on that.</li>
<li> Workshop to get patches into mainline. Helped Vortex86 get their small patches up to mainline.</li>
</ul>
</li>
<li>Ensure speakers are focused on a development topic. This will require local organizers to read abstracts.</li>
<li>Provide opportunity for hardware vendors attending conference to give a 2 minute rundown of their devices. Hearing about new hardware was useful for many of the Kernel developers in attendance.</li>
<li>Wifi with other ports opened :D</li>
</ul>
<strong>Accomplishing next years goals</strong>
<ul>
<li>Get list of top requested non-working hardware from Ellis and invite vendors</li>
<li>Contact Scott from Motorola about about chipset trade magazines</li>
<li>Find more people in Taipei who are interested in doing organization</li>
</ul>
<strong>Session Notes</strong>

<em>How and why to work with the Kernel community - Harald Welte:</em> Solid
overview of the how and whys. A session like this should be given every year.

<em>Introduction to git - Junio C Hamano:</em> Learned about git stash and
enjoyed the visual metaphors used in the presentation. Great approach for
presenting what can be a difficult to understand topic.  <em> Linux graphics
driver development model - Eric Anholt:</em> Overview of the present and future
of Xorg architecture. Surprised that the audience had no questions as this
topics was requested by several people. Perhaps translations would have helped?
Ask Eric if a tutorial format might be able to show people how easy some of
this stuff is: since he was insisting it really is ;)

<em>File System Performance Tuning for Gdium - Coly Li:</em> Talk was given in
Mandarin but it triggered a number of questions. Note for next year: talks
don't need to be just about drivers to be relevant.  <em> ACPI EC driver -
Alexey Starikovskiy:</em> Alexey had the chance to meet with several people to
talk about ACPI issues in their hardware. He seemed very happy with this result
but missed out on meeting someone from Acer.

<em>Eee Peripheral Interoperability - Ellis Wang:</em> EeePC trying a strategy
of getting a closed driver from vendors then opening a driver later. We talked
at length why this process can be painful and doesn't work for the community.
Also pained to hear the EeePC OS uses a closed source Bluetooth stack instead
of helping with BlueZ. Still confused on their requirement to get device
specific printer tools working.

<em>DMP x86 Soc Family - Anthony:</em> Fixed their patches for their IDE driver
to use proper QUIRKS so the hardware should work under the next vanilla Kernel
release.

<em>"Secure Linux" Primer - Toshiharu Harada: </em>Fantastic overview of
Security systems under Linux. Made a convincing argument that security systems
like AppArmor, SELinux, Tomoyo are interesting for embedded systems.

<em>TOMOYO Linux: pragmatic and manageable security for Linux - Kentaro Takeda:
</em>Part two of Toshiharu's talk. Really cool to see the "interactive judging"
that blocks system calls like the Vista "Keep Blocking"/"Unblock" dialog boxes.

<em>Andes Open Development Environment For Linux - Shawn:</em> A new SoC with a
new $ARCH. Planning to merge in the next 6 months the GCC, Kernel and QEMU
changes.  Harald tried to convince them to merge now- or at least get an RFC
out there so upstream can be prepared for the changes.

<em>The experience of touch pad driver and application development -
Garylee:</em> Given in Mandarin but the slides showed that he had a good
understanding of all of the moving parts in the Linux input system.  <em> Linux
Multiqueue Network Driver Infrastructure - Herbert Xu:</em> Didn't watch this
one- talking with EeePC guys.
