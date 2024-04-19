import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import DataTable from './Table';

const App = () => {
  const [formData, setFormData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/audio/recordings');
      console.log(response.data)
      setFormData(response.data)
    }catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <Form />
      <h2>Submitted Data</h2>
      <DataTable data={formData} />
    </div>
  );
};

export default App;
