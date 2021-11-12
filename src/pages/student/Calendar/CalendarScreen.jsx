import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { useLazyQuery } from '@apollo/react-hooks';

import moment from 'moment';
import { useContext } from 'react/cjs/react.development';
import StartScreen from '../../Start/StartScreen';
import AddEventModal from '../../../components/main/Calendar/AddEventModal';
import { AuthContext } from '../../../context/auth';
// import { ADD_EVENT } from '../../../graphql/mutation';
import { GET_EVENTS } from '../../../graphql/query';

Modal.setAppElement('#root');

export default function CalendarScreen(props) {
  const { user } = useContext(AuthContext);

  if (!user) {
    props.history.push('/');
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState();
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    const calendarAPI = calendarRef.current.getApi();
    calendarAPI.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };

  const [runQuery, { data }] = useLazyQuery(GET_EVENTS);

  useEffect(() => {
    setEvents(data && data.getEvents);

  }, [data, events]);

  // const [ createEvent ] = useMutation(ADD_EVENT);

  return (
    <StartScreen teacher={user.rol}>
      <div className="container-fluid">
        <div style={{ overflow: 'auto', width: '100%', height: '100vh' }}>
          <button
            className="btn btn-primary"
            onClick={() => setModalOpen(true)}
          >
            Add Event
          </button>
          <div
            className="table-responsive"
            style={{ position: 'relative', zIndex: 0, width: '100%' }}
          >
            <FullCalendar
              ref={calendarRef}
              events={events}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              eventAdd={(event) => {}}
              datesSet={async (date) => {
                runQuery({
                  variables: {
                    start: moment(date.startStr).toISOString(),
                    end: moment(date.endStr).toISOString(),
                  },
                });
              }}
            />
          </div>

          <AddEventModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onEventAdded={(event) => onEventAdded(event)}
          />
        </div>
      </div>
    </StartScreen>
  );
}
