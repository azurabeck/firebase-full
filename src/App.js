import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './component/layout/Navbar'
import Dashboard from './component/dashboard/Dashboard'
import ProjectDetails from './component/projects/ProjectDetails'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'
import CreateProject from './component/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar />
         
         <Switch>

           <Route exact path='/' component={Dashboard}></Route>     
           <Route path='/project/:id' component={ProjectDetails}></Route>                  
           <Route path='/signin' component={SignIn}></Route> 
           <Route path='/signup' component={SignUp}></Route>     
           <Route path='/create' component={CreateProject}></Route>      

         </Switch>
      </div>
    );
  }
}

export default App;
