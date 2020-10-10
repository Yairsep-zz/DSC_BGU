import React, { Suspense } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Loader from './components/Loader'
import {
  Home,
  Collabs,
  Events,
  Projects,
  Apply,
  AfterSubmit,
  ApplicaitonFailed,
  Contact,
  Members,
  Content,
  WebDev,
  MobileDev,
  PythonDev,
  MLpage,
} from './pages'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div style={{flex:1}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/collabs" component={Collabs} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/content" component={Content} />
        <Route exact path="/content/webdev" component={WebDev} />
        <Route exact path="/content/mobiledev" component={MobileDev} />
        <Route exact path="/content/pythondev" component={PythonDev} />
        <Route exact path="/content/ml" component={MLpage} />
        <Route exact path="/apply/success" component={AfterSubmit} />
        <Route exact path="/apply/failed" component={ApplicaitonFailed} />
      </Switch>
      </div>
    </Suspense>
  )
}

export default App
