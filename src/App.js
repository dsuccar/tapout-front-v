import { render } from '@testing-library/react';
import React, { Component, useState, useEffect } from 'react'
import {Route, Switch, withRouter} from "react-router-dom"
import './App.css';

import Discover from "./components/Discover"




export default function App() { {

 
  const [breweries, setBreweries] = useState([])
  const [users, setUsers] = useState([])
  const [reviews, setReviews] = useState([])

  const getBreweries = () => {
    fetch(`http://localhost:3000/breweries`)
    .then(res => res.json())
    .then(breweries => {
      setBreweries(breweries)
    })
  }

  const getReviews = () => {
   
    fetch(`http://localhost:3000/reviews`)
    .then(res => res.json())
    .then(reviews => {
      setReviews(reviews)
    })
  }

  const getUsers = () => {
   
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(users => {
      setUsers(users)
    })
  }

  useEffect(getBreweries, [])


  
  // console.log("passing breweries", breweries)

  return (
    
   <div className="App">
  
       <Discover breweries={breweries} setBreweries={setBreweries} />
      
   </div>
  );

}
}
 
