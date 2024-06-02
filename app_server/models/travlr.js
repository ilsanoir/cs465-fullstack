const mongoose = require('mongoose');

// Trip schema definition
const tripSchema = new mongoose.Schema({
    code: { type: String, requried: true, index: true },
    name: { type: String, requried: true, index: true},
    length: { type: String, requried: true },
    start: { type: Date, requried: true },
    resort: { type: String, requried: true },
    perPerson: { type: String, requried: true },
    image: { type: String, requried: true },
    description: { type: String, requried: true }
});
const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;