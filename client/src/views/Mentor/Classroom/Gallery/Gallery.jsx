import React, { useEffect, useState } from 'react';
import {
  deleteStudent,
  getClassroom,
  setEnrollmentStatus,
  updateStudent,
} from '../../../../Utils/requests';
import './Gallery.less';
import MentorSubHeader from '../../../../components/MentorSubHeader/MentorSubHeader';
import { Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Gallery({ classroomId }) {

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <button id='home-back-btn' onClick={handleBack}>
        <i className='fa fa-arrow-left' aria-hidden='true' />
      </button>
      <MentorSubHeader
        title={'Gallery'}
        classroomId={classroomId}
        
      />
      
    </div>
  );
}
