import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
console.log('Current Database Count ' + Locations.find({}).count());
if (Locations.find({}).count() === 0) {
    _.each(locationsSeeds, function (car) {
        console.log("Inserted ", car.id);
        Locations.insert(car);
    })
}














