import { render } from '@testing-library/react';
import React, { Component } from 'react'
import {Route, Switch, withRouter} from "react-router-dom"
import './App.css';
// import AboutPage from "./components/AboutPage"
// import Navbar from "./components/Navbar";
import Discover from "./components/Discover"
// import {connect} from 'react-redux'
// import {fetchingBreweries, fetchingReviews, fetchingUsers} from './Redux/actions'



export default class App extends Component {
  constructor(){
    super()
    this.state = {
      breweries: {}
    }
  }
  fetchBreweries = () => {
    fetch(`http://localhost:3000/breweries`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        breweries: res
      })
    })
  }


  // const [breweries, setBreweries] = useState([])
  // const [users, setUsers] = useState([])

  // const getBreweries = () => {
   
  //   fetch(`http://localhost:3000/breweries`)
  //   .then(res => res.json())
  //   .then(res => {
  //     setBreweries(res)
  //   })
  // }

  // const getReviews = () => {
   
  //   fetch(`http://localhost:3000/reviews`)
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res)
  //   })
  // }

  // const getUsers = () => {
   
  //   fetch(`http://localhost:3000/users`)
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res)
  //   })
  // }

  // useEffect(getBreweries, [])

render(){
  

  return (
   <div className="App">
    {/* <Navbar/> */}
      {/* <Switch> */}
       <Discover fetchBreweries={this.fetchBreweries}/>
      
        {/* <Route   path="/" component={BreweriesContainer} /> */}
      {/* </Switch> */}
      
   </div>
  );
}
}

 
