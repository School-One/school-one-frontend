import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//COMPONENTS & SCREENS
import HomeScreen from './pages/home/HomeScreen';
import LoginScreen from './pages/login/LoginScreen';
import HomeStudent from './pages/student/home/HomeStudent';
import CourseScreen from './pages/course/CourseScreen';
import StartScreen from './pages/Start/StartScreen';
import TeacherScreen from './pages/teacher/home/TeacherScreen';

function App() {

  return (
    <Router>
      <>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/start" component={StartScreen} />
        <Switch>
          <Route path="/student" component={HomeStudent} />
          <Route path="/course/:courseid" component={CourseScreen} />
          <Route path="/teacher" component={TeacherScreen} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
