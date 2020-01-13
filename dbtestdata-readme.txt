# database migration commands (Windows CMD)

mongoexport /db:hotplots /collection:users > hotplots.users.json
mongoexport /db:hotplots /colleciton:articles > hotplots.articles.json

mongoimport /db:hotplots /collection:users hotplots.users.json
mongoimport /db:hotplots /collection:articles hotplots.articles.json

"c:\Program Files\MongoDB\Server\4.2\bin\mongoimport" /db:hotplots /collection:users hotplots.users.json
"c:\Program Files\MongoDB\Server\4.2\bin\mongoimport" /db:hotplots /collection:articles hotplots.articles.json