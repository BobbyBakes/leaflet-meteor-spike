run:
meteor run for atlas
MONGO_URL='mongodb://Bobbys-MacBook-Pro.local:27000' meteor

meteor run for atlas
MONGO_URL='mongodb://192.168.128.210:27017' meteor

update car:
meteor:PRIMARY> db.locations.update({id:"car2"},{id:"car2",type:"car", x:571,y:560,icon:"img/largedriverpin-yellow2x.png"})

setting up Atlas DB:
export MONGO_URL='mongodb://Bobbys-MacBook-Pro.local:27000'

setting up local DB:
export MONGO_URL='mongodb://192.168.128.210:27017'
