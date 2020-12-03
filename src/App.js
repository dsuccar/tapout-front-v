import React, { useState, useEffect } from 'react'
import './App.css';

import Discover from "./components/Discover"




export default function App() { {

 
  const [breweries, setBreweries] = useState([])
  const [users, setUsers] = useState([])
  const [reviews, setReviews] = useState([])

  const fetchCalls = () => {
    fetch(`http://localhost:3000/breweries`)
    .then(res => res.json())
    .then(breweries => {
      setBreweries(breweries)
    })
    fetch(`http://localhost:3000/reviews`)
    .then(res => res.json())
    .then(reviews => {
      setReviews(reviews)
    })
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(users => {
      setUsers(users)
    })

  }

  // const getReviews = () => {
   
  //   fetch(`http://localhost:3000/reviews`)
  //   .then(res => res.json())
  //   .then(reviews => {
  //     setReviews(reviews)
  //   })
  // }

  // const getUsers = () => {
   
  //   fetch(`http://localhost:3000/users`)
  //   .then(res => res.json())
  //   .then(users => {
  //     setUsers(users)
  //   })
  // }

  useEffect(fetchCalls, [])



  
  console.log("app users", users)

  return (
    
   <div className="App">
  
       <Discover 
       breweries={breweries} 
       setBreweries={setBreweries} 
       reviews = {reviews}
       setReviews = {setReviews}
       users={users}
       />
      
   </div>
  );

}
}
 
