const mongoose = require('mongoose')

const s = mongoose.model("user", mongoose.Schema({
    id: { type: String, required: true },
    admin: { type: Boolean, default: false },
    blacked: { type: Boolean, default: false },

}))

module.exports = s