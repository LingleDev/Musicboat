const mongoose = require('mongoose')

const s = mongoose.model("guild", mongoose.Schema({
    id: { type: String, required: true },
    prefix: { type: String, default: "m-" },
    premium: { type: Boolean, default: false },
    dj: { type: String, default: null },
    admin: { type: String, default: null },
    queue: { type: Array, default: [] },
    owner: { type: String, required: true },
    DJEnabled: { type: String, default: false }
}))

module.exports = s