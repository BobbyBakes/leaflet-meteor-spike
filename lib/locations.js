Locations = new Mongo.Collection('locations');

locationsSeeds = [{
    'id': 'car1',
    'type': 'car',
    'x': '-70',
    'y': '-70'
}, {
    'id': 'car2',
    'type': 'car',
    'x': '-90',
    'y': '-70'
}];

if (Locations.find().count() === 0) {
    _.each(locationsSeeds, function (car) {
        console.log("Inserted ", car.id)
        console.log(Locations.insert(car));
    })
};
