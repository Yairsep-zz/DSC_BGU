import React , {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {FirebaseAppProvider} from "reactfire";
import {firebaseConfig} from "./firebaseConfig";

function App() {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <div className="App">
                <Suspense fallback={<div>Loading...</div>}>
                <NavigationBar/>
                </Suspense>
            </div>
        </FirebaseAppProvider>
    );
}

export default App;
