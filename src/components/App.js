import React, { Component, Fragment } from 'react';
import Header from './header/Header';
import Home from './content/home/Home';
import Dashboard from './content/dashboard/Dashboard';
import Workplace from './content/workplace/Workplace';
import { data } from '../data/information' // Direct object
// import { API } from '../data/data' // Fetch to .json
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.api = new API();
    this.state = { page: 'workplace'} // { page: 'workplace', data: null }
    // this.getData();
  }

  getResponse(value){
    this.setState({ page: value });
  }

  // getData() {
  //   this.api.getData().then(information => {
  //     this.setState({ page: information });
  //   });
  // }

  render() {
    if (data) {
      return (
        <Fragment>
          <Header
            userInformation = {data.userInformation}
            callback = {this.getResponse.bind(this)}
          />
          {this.state.page === 'home' ? <Home/> : null}
          {this.state.page === 'dashbord' ? <Dashboard/> : null}
          {this.state.page === 'workplace' ? <Workplace
            ongoingProject = {data.ongoingProject}
            dynamic = {data.dynamic}
            xxIndex = {data.xxIndex}
            team = {data.teams}
          /> : null}
        </Fragment>
      );
    } else {
      // Return an error page!
      return (
        <Fragment>
          <div><p>There was an error loading the data</p></div>
        </Fragment>
      );
    }
  }
}
 
export default App;