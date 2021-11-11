import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import { GET_REMINDERS } from '../../../graphql/query';
import LoadingBox from '../loadingBox/LoadingBox';
import MessageBox from '../messageBox/MessageBox';
export const Reminder = (props) => {
    const [reminderHidden, setReminderHidden] = useState(null);
    const {loading,error,data} = useQuery(GET_REMINDERS, {
        variables: { studentId: props.studentId }
    });
  return (
    <>
      {
          loading ? <LoadingBox/> : error ? <MessageBox variant="danger">{error.message}</MessageBox> : (
            <>
            {
                data && data.getReminders.map((reminder, index) => (
                    <div key={index}>
                        <div className="row mt-3">
                            <div className="col-md-9">
                              <p className="Todo_title">
                              {reminder.title} 
                              </p>
                            </div>
                            <Link 
                            to={`/course/${reminder.course_id}/assignments/${reminder.homework_id}`} 
                            className="Todo_desc">Ir a actividad <i className='bx bx-right-arrow-alt'></i></Link>
                            <p className="Todo_fech">{new Date(reminder.startDate).toLocaleDateString()} - {new Date(reminder.startDate).toLocaleTimeString()}</p>
                        </div>
                    </div>
                ))
            }
            </>
          )
      }
    </>
  );
};
