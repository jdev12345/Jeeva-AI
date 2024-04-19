import React from 'react';
import AudioPlayer from 'react-audio-player';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Doctor's Name</th>
          <th>Patient's Name</th>
          <th>Patient's Age</th>
          <th>Recording Date</th>
          <th>Audio</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((entry, index) => (
          <tr key={index}>
            <td>{entry.doctorName}</td>
            <td>{entry.patientName}</td>
            <td>{entry.patientAge}</td>
            <td>{entry.recordingDate}</td>
            <td>
              <AudioPlayer src={`http://localhost:5000/audio/recordings/${entry._id}`} controls />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
