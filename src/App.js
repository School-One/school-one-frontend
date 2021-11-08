import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import HomeScreen from './pages/home/HomeScreen';
import LoginScreen from './pages/login/LoginScreen';
import LoginTeacherScreen from './pages/teacher/login/LoginTeacherScreen';
import HomeStudent from './pages/student/home/HomeStudent';
//import Settings from './pages/student/settings/Settings';
import StartScreen from './pages/Start/StartScreen';
import TeacherScreen from './pages/teacher/home/TeacherScreen';
import CourseScreen from './pages/student/Sidebar/CourseScreen';
import CalendarScreen from './pages/student/Calendar/CalendarScreen';
import HomeworkScreen from './pages/student/Course/HomeworkScreen';

function App() {

  return (
    <AuthProvider>
      <Router>
        <>
          <Route path="/" component={HomeScreen} exact />
          <AuthRoute path="/login" component={LoginScreen} exact />
          <Route path="/start" component={StartScreen} exact />
          <Route path="/student" component={HomeStudent} />
          <Route path="/course/:courseid" component={CourseScreen} exact />
          <Route path="/teacher" component={TeacherScreen} exact />
          <Route path="/calendar" component={CalendarScreen} exact />
          <Route path="/course/:courseid/assignments/:homeworkid" component={HomeworkScreen} exact />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
