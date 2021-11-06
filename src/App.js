import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import HomeScreen from './pages/home/HomeScreen';
import LoginScreen from './pages/login/LoginScreen';
import LoginTeacherScreen from './pages/teacher/login/LoginTeacherScreen';
import HomeStudent from './pages/student/home/HomeStudent';
import StartScreen from './pages/Start/StartScreen';
import TeacherScreen from './pages/teacher/home/TeacherScreen';

function App() {

  return (
    <AuthProvider>
      <Router>
        <>
          <Route path="/" component={HomeScreen} exact />
          <AuthRoute path="/login" component={LoginScreen} exact />
          <AuthRoute path="/login-teacher" component={LoginTeacherScreen} exact />
          <Route path="/start" component={StartScreen} />
          <Switch>
            <Route path="/student" component={HomeStudent} />
            {/* <Route path="/course/:courseid" component={CourseScreen} /> */}
            <Route path="/teacher" component={TeacherScreen} />
          </Switch>
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
