{
	"disqus_url": "http://www.ifup.org/posts/getting-to-goven/",
	"disqus_title": "Getting to Goven",

	"Title": "Getting to Goven",
	"Pubdate": "2014-02-16",
	"Keywords": [
		"go",
		"etcd",
		"goven",
		"gopath",
		"coreos"
	],
	"Topics": [
		"Development"
	],

	"Slug": "getting-to-goven",
	"Section": "post",
}

This is the step by step story of how [etcd][etcd], a project written in Go,
arrived at using [goven][goven] for library dependency management. It went
through several evolutionary steps while trying to find a good solution to
these basic goals:

- **Reproducible builds**: given the same git hash  and version of the Go compiler we wanted an identical binary everytime.
- **Zero dependencies**: developers should be able to fork on github, make a change, build, test and send a PR without having anything more than a working Go compiler installed.
- **Cross platform**: compile and run on OSX, Linux and Windows. Bonus points for cross-compilation.

[goven]: https://github.com/kr/goven
[etcd]: https://github.com/coreos/etcd

### Checked in GOPATH

Initially, to get reproducible builds and zero dependencies we checked in a
copy of the GOPATH to "third_party/src". Over time we encountered several
problems:

1. "go get github.com/coreos/etcd" was broken since downstream dependencies
would change master and "go get" would setup a GOPATH that looked different
than our checked in version.
1. Windows developers had to have a working bash. Soon we had to maintain a
copy of our build script written in Powershell.

At the time I felt that "go get" was an invalid use case since etcd was just a
project built in Go and "go get" is primarliy useful for easily grabbing
libraries when you are hacking on something. However, there was mounting user
requests for a "go gettable" version of etcd.

To solve the Windows problem I wrote a script called "third_party.go" which
ported the GOPATH management tools and the shell version of the "build" script
to Go.

### third_party.go

[third_party.go][thirdparty] worked well for a few weeks and we could remove the duplicate build logic in the Powershell scripts. The basic usage of was simple:

```
# Bump the raft dependency in the custom GOPATH
go run third_party.go bump github.com/coreos/go-etcd
# Use third_party.go to set GOPATH to third_party/src and build
go run third_party.go build github.com/coreos/etcd
```

But, there was a fatal flaw with this setup: it broke cross compilation via GOOS and GOARCH.

```
GOOS=linux go run third_party.go build github.com/coreos/etcd
fork/exec /var/folders/nq/jrsys0j926z9q3cjp1yfbhqr0000gn/T/go-build584136562/command-line-arguments/_obj/exe/third_party: exec format error
```

The reason is that GOOS and GOARCH get used internally by "go run`. Meaning it
literally tries to build "third_party.go" as a Linux binary and runs it.
Running a Linux binary on a OSX machine doesn't work.

This soultion didn't get us any closer to being "go gettable" either. There
were several inquiries per week for this. So, I started looking around for
better solutions and eventually settled on goven.

[thirdparty]: https://github.com/philips/third_party.go

### goven and goven-bump

goven achieves all of the desirable traits: reproducible builds, zero
dependencies to start developing, cross compilation, and as a bonus "go install
github.com/coreos/etcd" works.

The basic theory of operation is it checks all dependencies into subpackages of
your project. Instead of importing "code.google.com/p/goprotobuf" you import
`github.com/coreos/etcd/third_party/code.google.com/p/goprotobuf`. It makes the
imports uglier but it is automated by goven.

Along the way I wrote some helper tools to assist in bumping dependencies which
can be found on Github at [philips/goven-bump][goven-bump]. The scripts
`goven-bump" and "goven-bump-commit" grab the hg revision or git hash of the
dependency along with running goven. This makes bumping a dependency and
getting a basic commit message as easy as:

[goven-bump]: https://github.com/philips/goven-bump

```
cd ${GOPATH}/github.com/coreos/etcd
goven-bump-commit code.google.com/p/goprotobuf
git commit -m 'bump(code.google.com/p/goprotobuf): 074202958b0a25b4d1e194fb8defe5d69c300774'
```

goven and introduces some additional complexity for the maintainers of the
project. But, the simplicity it presents to regular contributors and users used
to "go get" make it worth the additional effort.
