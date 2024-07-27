const mongoose = require('mongoose');

const templeSchema = mongoose.Schema({
    name: String,
    country: String,
    state: String,
    city: String,
    location: String,
    description: String,
    image: String
});

const Temple = mongoose.model("Temple", templeSchema);
module.exports = Temple;