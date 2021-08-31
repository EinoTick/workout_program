import React from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Split from './pages/Split';
import Exercises from './pages/Exercises';
import Complete from './pages/Complete';
import {AnimatePresence} from 'framer-motion';
import SideBar from "./components/SideBar";
import {WorkoutProvider} from "./context/WorkoutContext";
import Workouts from "./pages/Workouts";


function App() {
  const location = useLocation();

  return (
      <>
        <div className="app-background"/>
        <SideBar/>
        <Header/>
        <WorkoutProvider>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route path="/split">
                <Split/>
              </Route>
              <Route path="/exercises">
                <Exercises/>
              </Route>
              <Route path="/complete">
                <Complete/>
              </Route>
              <Route path="/workouts">
                <Workouts/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </AnimatePresence>
        </WorkoutProvider>
      </>
  );
}

export default App;
