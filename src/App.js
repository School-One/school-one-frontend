import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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
