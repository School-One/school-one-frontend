import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//
import HomeScreen from './pages/home/HomeScreen';
import LoginScreen from './pages/login/LoginScreen';
import HomeStudent from './pages/student/home/HomeStudent';
import CalendarScreen from './pages/student/Calendar/CalendarScreen';

function App() {
  return (
    <Router>
      <>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/student" component={HomeStudent} exact />
        <Route path="/calendar" component={CalendarScreen} exact />
      </>
    </Router>
  );
}

export default App;
