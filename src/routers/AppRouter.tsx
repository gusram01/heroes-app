import React from 'react';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          <Route path="/" component={DashboardRouter}/>
        </Switch>
      </div>
    </Router>
  );
};
