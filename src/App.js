import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//
import HomeScreen from './pages/home/HomeScreen';
import LoginScreen from './pages/login/LoginScreen';

function App() {
  return (
    <Router>
      <>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
      </>
    </Router>
  );
}

export default App;
