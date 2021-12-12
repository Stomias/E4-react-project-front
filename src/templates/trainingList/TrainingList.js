import React from 'react';
import { useState, useEffect } from 'react';
import { List, Card } from 'antd';

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
   <div class="liste">
    <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={trainings}
    renderItem={training => (
      <List.Item>
        <Card title={training.libelleEntrainement}>{training.duree} minutes</Card>
      </List.Item>
    )}
  />
     {/* <div>
       {trainings.length > 0 && ( 
         <ul>
           {trainings.map(training => (
             <li key={training.idEntrainement}>{training.libelleEntrainement}</li>
           ))}
       </ul>
      )}
    </div>  */}
    </div>
  )
};

export default TrainingList;