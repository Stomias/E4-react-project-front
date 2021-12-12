import React from 'react';
import { useState, useEffect } from 'react';
import { List, Card, Button } from 'antd';
import userId from "../../myInitObject";
import TrainingCreation from '../trainingCreation/TrainingCreation';


const TrainingList = () => {

  const [trainings, setTrainings] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/trainings/user/" + userId.getUserId())
    const data = await response.json()
    setTrainings(data)
    console.log(data);
    console.log(userId.getUserId());
  }

  useEffect(() => {
    fetchData()
  }, []);


  
  return (
   <div className="liste">
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
    <Button type="primary">Créer Entrainement</Button>
  </div>
  )
};

export default TrainingList;