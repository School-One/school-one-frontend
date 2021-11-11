/* eslint-disable padded-blocks */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import HomeScreen from './pages/home/HomeScreen';
import LoginScreen from './pages/login/LoginScreen';
import HomeStudent from './pages/student/home/HomeStudent';
// import Settings from './pages/student/settings/Settings';
import TeacherScreen from './pages/teacher/home/TeacherScreen';
import CourseScreen from './pages/student/Sidebar/CourseScreen';
import CalendarScreen from './pages/student/Calendar/CalendarScreen';
import HomeworkScreen from './pages/student/Course/HomeworkScreen';
import LoginTeacherScreen from './pages/teacher/login/LoginTeacherScreen';
import AuthRouteTeacher from './util/AuthRouteTeacher';
import SettingScreen from './pages/student/settings/SettingScreen';
import checkScreen from './pages/teacher/course/checkScreen';
import Attendance from './pages/teacher/attendance/Attendance';
import ManageHomeworkScreen from './pages/teacher/homework/ManageHomeworkScreen';

function App() {
  return (
    <AuthProvider>
      <Router>
        <>
          <Route path="/" component={HomeScreen} exact />
          {/* Student */}
          <AuthRoute path="/login" component={LoginScreen} exact />
          <Route path="/student" component={HomeStudent} exact />
          <Route path="/course/:courseid" component={CourseScreen} exact />
          <Route path="/course/:courseid/assignments/:homeworkid" component={HomeworkScreen} exact />
          {/* Teacher */}
          <AuthRouteTeacher path="/login-teacher" component={LoginTeacherScreen} exact />
          <Route path="/teacher" component={TeacherScreen} exact />
          <Route path="/check/course/:courseId/:homeworkId" component={checkScreen} exact />
          <Route path="/attendance" component={Attendance} exact />
          <Route path="/manage/:courseid?" component={ManageHomeworkScreen} exact />
          {/* GENERAL */}
          <Route path="/config" component={SettingScreen} exact />
          <Route path="/calendar" component={CalendarScreen} exact />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
