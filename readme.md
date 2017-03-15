run:
meteor run for atlas db
MONGO_URL='mongodb://Bobbys-MacBook-Pro.local:27000' meteor

meteor run for local (not meteor) db
MONGO_URL='mongodb://192.168.128.210:27017' meteor

update car:
meteor:PRIMARY> db.locations.update({'id': id}, {'$set': {'x': x, 'y': y}})
*Python script written to update via TCP Packet

Env Variable setup for external  DB's
setting up Atlas DB:
export MONGO_URL='mongodb://Bobbys-MacBook-Pro.local:27000'

setting up local DB:
export MONGO_URL='mongodb://192.168.128.210:27017'


Notes*
- Mongo Cloud DB (Atlas): Easy agent setups: ~10 seconds latency
- Local Mongo DB: Easy setup: ~9 seconds of latency -- WHHYYYYY?
- Local Metoeor Mongo DB: NO latency: 
    - Caveat Meteor, in its brilliancy, decided to hard code the binded ip address on a local apps. 
    - https://github.com/meteor/meteor/blob/722082f343f121c39d004c384f0486175eb6f0ed/tools/runners/run-mongo.js#L49
        - Due to this, an external application cannot update a local mongo DB (hence the quick tcp solution)
