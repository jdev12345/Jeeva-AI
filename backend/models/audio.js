const mongoose = require('mongoose');
const audioSchema = new mongoose.Schema({
    soundFile: {
        type:Buffer,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    recordingDate: {
        type: Date,
        required: true
    }
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;