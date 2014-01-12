# Open Source

![](images/Tux.png)

---

### Who am I?

<!--

-->

- Maintain and write a lot of Open Source Software (OSS)
- Work on [Monitoring as a Service][maas]
  - Monitoring agent
  - Luvit
- Used to work on the Linux Kernel at SUSE

[maas]: http://www.rackspace.com/cloud/cloud_hosting_products/monitoring/

---

## What is Open Source?

---

## Licenses

---

### Basic topics of a license

<!--
As a software engineer and copyright holder you put your code under
a license that essentially controls the following terms of the code
and output of that code.
-->

- Redistribution
- Source code
- Derived works
- (Patent grants)

---

### Most Common Licenses

<!--
Ordered roughly from most permissive to least permissive
-->

- MIT/BSD 
- Apache License 2.0
- Lesser General Public License (LGPL)
- GNU General Public License v2 (GPLv2)
- GNU General Public License v3 (GPLv3)

---

## Code

---

### Version Control Systems

- Track the history of changes to a collection of files
- Each change is a commit or "patch"
- A collection of changes is called a patch set or pull request

---

### Patches/Commits

```
From: Brandon Philips <brandon@ifup.org>
Date: Mon, 27 Aug 2012 22:22:59 -0700
Subject: [PATCH] monitoring: protocol: connection: args instead of {...}

args is defined, use it.

---
 agents/monitoring/default/protocol/connection.lua |    2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

diff --git a/agents/monitoring/default/protocol/connection.lua b/agents/monitoring/default/protocol/connection.lua
index 703f91c..f1eeae1 100644
--- a/agents/monitoring/default/protocol/connection.lua
+++ b/agents/monitoring/default/protocol/connection.lua
@@ -136,7 +136,7 @@ function AgentProtocolConnection:respond(name, ...)
     callback(err)
     return
   else
-    return method(self, unpack({...}))
+    return method(self, unpack(args))
   end
 end

```

---

### Lots and lots of patches

![](images/patches-mbox.png)

--- 

### Peer Review (mailing lists)

```
On Tue, 26.06.12 18:58, Shawn Landden (shawnlandden@gmail.com) wrote:

Heya,

> diff --git a/man/systemd-analyze.xml b/man/systemd-analyze.xml
> index 960ae7d..c2ff9cc 100644
> --- a/man/systemd-analyze.xml
> +++ b/man/systemd-analyze.xml
> @@ -102,7 +102,7 @@
>  
>                  <variablelist>
>                          <varlistentry>
> -                                <term><option>--h</option></term>
> +                                <term><option>-h</option></term>
>                                  <term><option>--help</option></term>
>  
>                                  <listitem><para>Prints a short help

Thanks, applied! (And also fixed the same typo at all the other places
that were copy and pasted from the same place)

Lennart
```

### Peer Review (github)

![](images/github-code-review.png)

---

## Community

---

### Communication

- IRC
- Mailing Lists
- Conferences

### Community Roles

- Maintainer
  - Shepard for the code base
  - An engineer with a technical vision
  - Can be elected, self elected, etc
- Contributor
  - User who encounters a bug
  - User who wants a new feature