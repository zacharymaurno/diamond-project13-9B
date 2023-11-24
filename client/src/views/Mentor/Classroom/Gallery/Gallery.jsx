import React, { useEffect, useState } from 'react';
import './Gallery.less';
import MentorSubHeader from '../../../../components/MentorSubHeader/MentorSubHeader';
import { Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getMentor, getClassroom } from '../../../../Utils/requests';

export default function Gallery({ classroomId }) {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [classIds, setClassIds] = useState({});
  const [classroomDetails, setClassroomDetails] = useState(null);


    useEffect(() => {
        getData();
    }, []);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/dashboard');
  };
  async function getData() {
    try {
        const userData = await getMentor();
        console.log(userData);
        setUser(userData);
        setData(userData.data.classrooms);
        console.log(userData.data.classrooms);

        const classIds = userData.data.classrooms.map((classroom) => classroom.id);
        setClassIds(classIds);
        const details = await getClassroom(classroomId);
        setClassroomDetails(details);
    }
    catch (error){
        console.error('Error fetching data: ', error);
    }
  }
   
  

  return (
    <div>
      <button id='home-back-btn' onClick={handleBack}>
        <i className='fa fa-arrow-left' aria-hidden='true' />
      </button>
      <MentorSubHeader
        title={'Gallery'}
        classroomId={classroomId}
      />
        
            {classroomDetails !== null && (
                <div id ='card-container'>
                    {(classroomDetails.data) ? (

                    <div id='card-container'>
                        {classroomDetails.data.contents.map((content) => (
                            <li key ={content.id}>Description: {content.description} 
                            <div>Flag count: {content.flags}</div></li> 
                        ))}
                    </div>
                        ) : (
                            <div>No content found for this classroom.</div>
                        )}
                </div>
            )}    
      
    </div>
  );
}
