const express = require("express");
const router = express.Router();

const multer = require('multer');
const Audio = require('../models/audio');
const storage = multer.memoryStorage()

const upload = multer({ storage: storage });
const form_controller = require("../controllers/audioController");

router.post('/submit',upload.single('file'), form_controller.submit_form);
router.get('/recordings', form_controller.getRecordings);
router.get('/recordings/:id', form_controller.getRecordingsAudio);

module.exports = router;