const { Double } = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = mongoose.Schema({
    username: String,
    contact: String,
    items: Array,
    specialInstructions: String,
    specialLocations: String,
    selectedShop: String,
    selectedShop_id: String,
    favorited: Boolean,
    date: String,
    time: String,
    timeUntilArrival: String,
    secondsUntilArrival: Number,
    timeSelectedForPickup: String,
    expectedPickupTime: String,
    completed: Boolean,
    cashondelivery : Boolean
});

var Orders = mongoose.model('Order', orderSchema);

module.exports = Orders;
