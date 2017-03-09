Locations = new Mongo.Collection('locations');

locationsSeeds = [{
    'id': 'car1',
    'type': 'car',
    'y': '100',
    'x': '70'
}, {
    'id': 'car2',
    'type': 'car',
    'y': '894',
    'x': '70'
},
    {
        'id': 'car3',
        'type': 'car',
        'y': '86',
        'x': '672'
    },

    {
        'id': 'car4',
        'type': 'car',
        'y': '894',
        'x': '670'
    },
    {
        'id': 'car5',
        'type': 'car',
        'y': '894',
        'x': '670'
    },

];

if (Locations.find().count() === 0) {
    _.each(locationsSeeds, function (car) {
        console.log("Inserted ", car.id)
        console.log(Locations.insert(car));
    })
}
;
