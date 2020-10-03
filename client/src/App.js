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
import AfterSubmit from "./pages/Apply/Appliction/AfterSubmit";
import ApplicaitonFailed from "./pages/Apply/Appliction/ApplicaitonFailed"
import Contact from "./pages/Contact/Contact";
import Members from "./pages/Members/Members";
import CircularProgress from '@material-ui/core/CircularProgress';
import Content from "./pages/Content/Content";
import WebDev from "./pages/Content/WebDev/WebDev";
import MobileDev from "./pages/Content/MobileDev/MobileDev";
import PythonDev from "./pages/Content/PythonDev/PythonDev";
import MLpage from "./pages/Content/ML/MLpage";


function App() {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <div className="App">
                    <Router>
                        <NavigationBar/>
                        <Suspense fallback={<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}><CircularProgress/></div>}>
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route exact={true} path="/Home">
                                <Home/>
                            </Route>
                            <Route exact={true} path="/Collab">
                                <Partners/>
                            </Route>
                            <Route exact={true} path="/Members">
                                <Members/>
                            </Route>
                            <Route exact={true} path="/Events">
                                <Events/>
                            </Route>
                            <Route path="/Projects">
                                <Projects/>
                            </Route>
                            <Route exact={true} path="/Apply">
                                <Apply/>
                            </Route>
                            <Route exact={true}  path="/Contact">
                                <Contact/>
                            </Route>
                            <Route  path="/WebDev">
                                <WebDev/>
                            </Route>
                            <Route exact={true} path="/MobileDev">
                                <MobileDev/>
                            </Route>
                            <Route exact={true} path="/PythonDev">
                                <PythonDev/>
                            </Route>
                            <Route exact={true} path="/ML">
                                <MLpage/>
                            </Route>
                            
                            <Route exact={true} path="/Apply/Success" component={AfterSubmit} />
                            <Route exact={true} path="/Apply/Failed" component={ApplicaitonFailed} />
                        </Switch>
                        </Suspense>
                    </Router>
            </div>
        </FirebaseAppProvider>
    );
}

export default App;
