import React, { useState, useEffect } from 'react';

function AudioPlayer({ audioId }) {
  // const [audioUrl, setAudioUrl] = useState(null);

  // useEffect(() => {
  //   const fetchAudio = async () => {
  //     try {
  //       const response = await fetch();
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch audio');
  //       }
  //       const blob = await response.blob();
  //       setAudioUrl(URL.createObjectURL(blob));
  //     } catch (error) {
  //       console.error('Error fetching audio:', error);
  //     }
  //   };

  //   fetchAudio();

  //   // Clean up the URL object when component unmounts
  //   return () => {
  //     if (audioUrl) {
  //       URL.revokeObjectURL(audioUrl);
  //     }
  //   };
  // }, [audioId]);
  console.log(`http://localhost:5000/recordings/${audioId}`)

  return (
    <div>
      {audioUrl && (
        <audio controls>
          <source src={`http://localhost:5000/recordings/${audioId}`} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default AudioPlayer;
