import React, {Suspense} from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {FirebaseAppProvider} from "reactfire";
import {firebaseConfig} from "./firebaseConfig";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import Events from "./pages/Events/Events";
import Projects from "./pages/Projects/Projects";
import Apply from "./pages/Apply/Apply";
import Contact from "./pages/Contact/Contact";
import Members from "./pages/Members/Members";
import CircularProgress from '@material-ui/core/CircularProgress';


function App() {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <div className="App">
                    <Router>
                        <NavigationBar/>
                        <Suspense fallback={<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}><CircularProgress/></div>}>
                        <Switch>
                            <Route path="/Home">
                                <Home/>
                            </Route>
                            <Route path="/Partners">
                                <Partners/>
                            </Route>
                            <Route path="/Members">
                                <Members/>
                            </Route>
                            <Route path="/Events">
                                <Events/>
                            </Route>
                            <Route path="/Projects">
                                <Projects/>
                            </Route>
                            <Route path="/Apply">
                                <Apply/>
                            </Route>
                            <Route path="/Contact">
                                <Contact/>
                            </Route>
                        </Switch>
                        </Suspense>
                    </Router>
            </div>
        </FirebaseAppProvider>
    );
}

export default App;
