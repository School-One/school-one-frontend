import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//
import HomeScreen from './pages/home/HomeScreen';
import LoginScreen from './pages/login/LoginScreen';
import HomeStudent from './pages/student/home/HomeStudent';
<<<<<<< HEAD
import CalendarScreen from './pages/student/Calendar/CalendarScreen';
=======
import CourseScreen from './pages/course/CourseScreen';
>>>>>>> 36cc7e88b1e116b40ab3e3085bff5246dbbe604a

function App() {
  return (
    <Router>
      <>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/student" component={HomeStudent} exact />
<<<<<<< HEAD
        <Route path="/calendar" component={CalendarScreen} exact />
=======
        <Route path="/course/:courseid" component={CourseScreen} exact />
>>>>>>> 36cc7e88b1e116b40ab3e3085bff5246dbbe604a
      </>
    </Router>
  );
}

export default App;
