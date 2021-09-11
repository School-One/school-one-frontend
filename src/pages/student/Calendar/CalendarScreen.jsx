import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import AddEventModal from '../../../components/main/Calendar/AddEventModal';
import Sidebar from '../../../components/main/sidebar/Sidebar';

import axios from 'axios';
import moment from 'moment';

Modal.setAppElement('#root');

export default function CalendarScreen(props) {

    const userSignin = useSelector((state) => state.userSignin);

    const { userInfo } = userSignin;

    if(!userInfo) {
        props.history.push('/');
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    const onEventAdded = (event) => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        });
    }

    const handleEventAdd = async(data) =>{
        console.log(data.event);
        await axios.post('http://localhost:4000/api/calendar', data.event);
    }

    const handleDatesSet = async(data) => {
        const response = await axios.get('http://localhost:4000/api/calendar?start='+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString());
        setEvents(response.data);
    }

    

    return (
        <Sidebar>
            <div className="container-fluid">
                <div style={{overflow: 'auto', width:'100%', height: '100vh'}}>
                    <button className="btn btn-primary" onClick={() => setModalOpen(true)} >Add Event</button>
                    <div className="table-responsive" style={{ position:'relative',zIndex: 0, width: '100%'}}>
                        <FullCalendar
                            ref={calendarRef}
                            events={events}
                            plugins={[ dayGridPlugin ]}
                            initialView="dayGridMonth"
                            eventAdd={event => handleEventAdd(event)}
                            datesSet={(date) => handleDatesSet(date)}
                        />
                    </div>

                    <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} />
                </div>
            </div>
        </Sidebar>
    )
}
