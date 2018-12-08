import 'bulma-checkradio/dist/css/bulma-checkradio.min.css'
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
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <ul>
                      <li>
                        <h2 className="title is-2">Feed</h2>
                        <ul>
                          <li>
                            <input type="checkbox" />
                            Chomp - 1 Hopper Mouse
                          </li>
                          <li>
                            <input type="checkbox" />
                            Kirby - 1 Large Pinky Mouse
                          </li>
                          <li>
                            <input type="checkbox" />
                            Specter - 1 Large Pinky Mouse
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h2 className="title is-2">Clean</h2>
                        <ul>
                          <li>
                            <input type="checkbox" />
                            Daquiri
                          </li>
                          <li>
                            <input type="checkbox" />
                            Whistle
                          </li>
                          <li>
                            <input type="checkbox" />
                            Ember kitty
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h2 className="title is-2">Water</h2>
                        <ul>
                          <li>
                            <input type="checkbox" />
                            Zuko
                          </li>
                          <li>
                            <input type="checkbox" />
                            Kiki
                          </li>
                          <li>
                            <input type="checkbox" />
                            Charmy
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h2 className="title is-2">Misc.</h2>
                        <ul>
                          <li>
                            <input type="checkbox" />
                            Clean Atlas Filter
                          </li>
                          <li>
                            <input type="checkbox" />
                            Move Up Mike RoweBoat
                          </li>
                          <li>
                            <input type="checkbox" />
                            Clean Poop Sand
                          </li>
                        </ul>
                      </li>
                      {/* <div className="field">
                      <input
                        className="is-checkradio is-success"
                        id="exampleCheckboxSuccess"
                        type="checkbox"
                        name="exampleCheckboxSuccess"
                        checked="checked"
                      />
                      <label for="exampleCheckboxSuccess">
                        Checkbox - success
                      </label>
                    </div> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
