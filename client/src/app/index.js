import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ProjectsList, ProjectsInsert, ProjectsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
         <Router>
            <NavBar />
            <Switch>
                <Route path="/projects/list" exact component={ProjectsList} />
                <Route path="/projects/create" exact component={ProjectsInsert} />
                <Route
                    path="/projects/update/:id"
                    exact
                    component={ProjectsUpdate}
                />
            </Switch>
        
        </Router>
        
    )
}

export default App