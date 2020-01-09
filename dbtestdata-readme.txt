# database migration commands (Windows CMD)

mongoexport /db:hotplots /collection:users > hotplots.users.json
mongoexport /db:hotplots /colleciton:articles > hotplots.articles.json

mongoimport /db:hotplots /collection:users hotplots.users.json
mongoimport /db:hotplots /collection:articles hotplots.articles.json

