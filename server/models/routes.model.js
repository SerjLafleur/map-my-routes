const moogoose = require('mongoose')

const RoutesSchema = moogoose.Schema({
    start: String,
    end: String,
    date: String,
    desde: {
        lat: Number,
        lng: Number
    },
    hasta: {
        lat: Number,
        lng: Number
    }
})

module.exports = moogoose.model('Routes', RoutesSchema)