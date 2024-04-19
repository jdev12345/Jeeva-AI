const asyncHandler = require("express-async-handler");
const mongoose = require('mongoose');
const Audio = require('../models/audio');

const getRecordings = asyncHandler(async (req, res, next) => {
  try {
    const recordings = await Audio.find({}).select("doctorName patientName patientAge recordingDate ");
    res.status(200).json(recordings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching recordings', error: error });
  }
})

const submit_form = asyncHandler(async (req, res) => {
    if (!req.file||!req.body.doctorName || !req.body.patientName || !req.body.patientAge || !req.body.recordingDate) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      try {
        const newRecording = new Audio({
          doctorName: req.body.doctorName,
          soundFile: req.file.buffer,
          patientName: req.body.patientName,
          patientAge: req.body.patientAge,
          recordingDate: req.body.recordingDate,
        });
        await newRecording.save();
        res.status(201).json({ message: 'Recording saved successfully' });
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error saving recording', error: error });
      }
});

const getRecordingsAudio = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  try {
    const recording = await Audio.findById(new mongoose.Types.ObjectId(id)).select("soundFile");
    res.set({
      'Content-Type': 'audio/mp3',
    });
    res.send(recording.soundFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching recordings', error: error });
  }
})

module.exports = {
  submit_form,
  getRecordings,
  getRecordingsAudio,
};