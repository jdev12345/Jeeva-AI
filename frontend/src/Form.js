import React, { useState } from 'react';
import axios from 'axios';

function SoundRecordingForm() {
    const [formData, setFormData] = useState({
        doctorName: '',
        patientName: '',
        patientAge: '',
        recordingDate: '',
        file: null
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                    // Add any additional headers here
                }
            };
            const response = await axios.post('http://localhost:5000/audio/submit', formData, config);
            alert('Recording stored successfully');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to store recording');
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>Doctor's Name:</label>
            <input type="text" name="doctorName" value={formData.doctorName} onChange={handleInputChange} />
            <label>Patient's Name:</label>
            <input type="text" name="patientName" value={formData.patientName} onChange={handleInputChange} />
            <label>Patient's Age:</label>
            <input type="number" name="patientAge" value={formData.patientAge} onChange={handleInputChange} />
            <label>Date of Recording:</label>
            <input type="date" name="recordingDate" value={formData.recordingDate} onChange={handleInputChange} />
            <label>Upload Sound File:</label>
            <input type="file" name="soundFile" onChange={handleFileChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default SoundRecordingForm;
