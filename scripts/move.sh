#!/bin/sh

target="${HOME}/trees/ifup-hugo/content/posts"

for i in 2008* 2009* 2010* 2011* 2012*; do
	date=$(echo $i | cut -d '-' -f 1,2,3)
	date_slash=$(echo $date | sed -e 's/-/\//g')
	slug=$(echo $i | cut -d '-' -f 4-100 | sed -e 's/.markdown//g')
	title=$(cat $i | grep title: | sed -e 's/title: //g')
	topics=$(cat $i | grep topics: | sed -e 's/topics: //g')

cat << EOF > ${target}/${slug}.md
{
	"disqus_url": "http://www.ifup.org/${date_slash}/${slug}/index.html",
	"disqus_title": "${title}",

	"Title": "${title}",
	"Pubdate": "${date}",
	"Keywords": ${topics},
	"Topics": [
		"Development"
	],

	"Slug": "${slug}",
	"Section": "post",
}
EOF

	cat ${i} | sed -e '/^\-\-\-/,/^\-\-\-/d' >> ${target}/${slug}.md
done
