import React, { Component, useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MentorSubHeader from '../../components/MentorSubHeader/MentorSubHeader';
import {getClassroom, getMentor } from '../../Utils/requests';

export default function ModerationPageHistory() {
    
    const [user, setUser] = useState({});
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const [classIds, setClassIds] = useState({});

    const [classroomDetails, setClassroomDetails] = useState(null);

    useEffect(() => {
        getData();
    }, []);


    //This is an async function due to mentor files functions.
    async function getData() {
        try {
            const userData = await getMentor();
            console.log(userData);
            setUser(userData);
            setData(userData.data.classrooms);
            console.log(userData.data.classrooms);

            const classIds = userData.data.classrooms.map((classroom) => classroom.id);
            setClassIds(classIds);
        }
        catch (error){
            console.error('Error fetching data: ', error);
        }
    }

    async function handleClassroomChange(classId) {
        try {
            const details = await getClassroom(classId);
            setClassroomDetails(details);
        }
        catch (error) {
            console.error('Error fetching classroom details: ', error);
        }
    }

        return (
            <div className='container nav-padding'>
                <NavBar />
                <div id='main-header'> Moderation History</div>
                
            <label>Select Classroom:</label>
            <select

                value={selectedOption}
                onChange={(e) => {
                    const selectedId = e.target.value;
                    setSelectedOption(selectedId);
                    handleClassroomChange(selectedId);
                    }}
            >
                {console.log(selectedOption)};
                <option value="">Select an option</option>
                {data.map((classroom, index) => (
                    <option key={index} value={classroom.id}>
                        {classroom.name}
                    </option>
                ))}
            </select>
           
            {classroomDetails !== null && (
                <div id='classrooms-container'>
                    <p>Content:</p>
                    {(classroomDetails.data) ? (

                    <div>
                        {classroomDetails.data.contents.map((content) => (
                            content.moderated === true &&
                            <div key ={content.moderated}>{content.description}
                            Reason for report: {content.ReportReason} </div> 
                        ))}
                        {classroomDetails.data.contents.map((content) => (
                            content.moderated === false &&
                            <div key ={content.id}>No history of reported content in this classroom</div> 
                        ))}
                        {console.log(classroomDetails.data.contents)}
                    </div>
                        ) : (
                            <p>No history of reported content in this classroom</p>
                        )}
                </div>
            )}
                
            </div>
            
        ); 
}

