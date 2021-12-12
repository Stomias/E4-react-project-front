import React from 'react';
import { useState, useEffect } from 'react';

const TrainingList = () => {

  const [trainings, setTrainings] = useState([])

  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/trainings/user/1')
    const data = await response.json()
    setTrainings(data)
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {trainings.length > 0 && (
        <ul>
          {trainings.map(training => (
            <li key={training.idEntrainement}>{training.libelleEntrainement}</li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default TrainingList;