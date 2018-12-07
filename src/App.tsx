import 'bulma-timeline/dist/css/bulma-timeline.min.css'
import 'bulma/css/bulma.css'
import * as React from 'react'
import './App.scss'

import NavBar from './Pages/Components/NavBar'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavBar />
        <div className="timeline">
          <header className="timeline-header">
            <span className="tag is-medium is-primary">Start</span>
          </header>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary" />
            <div className="timeline-content">
              <p className="heading">January 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <div className="timeline-item is-warning">
            <div className="timeline-marker is-warning is-image is-32x32">
              <img src="http://bulma.io/images/placeholders/32x32.png" />
            </div>
            <div className="timeline-content">
              <p className="heading">February 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2017</span>
          </header>
          <div className="timeline-item is-danger">
            <div className="timeline-marker is-danger is-icon">
              <i className="fa fa-flag" />
            </div>
            <div className="timeline-content">
              <p className="heading">March 2017</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-medium is-primary">End</span>
          </header>
        </div>
      </div>
    )
  }
}

export default App
