const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {
        Project: { type: String, required: true },
        Subject: { type: String, required: true }, 
        Rate: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('projects', Project)