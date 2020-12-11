import React, { useState, useEffect } from 'react'
import './App.css';
import {Route,Switch, Link,} from "react-router-dom"

import SearchBar from './components/SearchBar'
import ReviewEdit from './components/ReviewEdit'
import BreweriesList from './components/BreweriesList'
import BreweryDetail from './components/BreweryDetail'
import Discover from "./components/Discover"
import NavBar from './components/NavBar'
import Login from './components/Login'



export default function App() { {

 
  const [breweries, setBreweries] = useState([])
  const [users, setUsers] = useState([])
  const [reviews, setReviews] = useState([])
  const [loginUser, setLoginUser] = useState(null)
  const [searchText, setSearchText] = useState("")
  const [filteredBreweries, setFilteredBreweries] = useState([])




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

  const setUser = (user) =>{
  console.log("the user that youve been waiting for",user)
  }

  useEffect(fetchCalls, [])



  useEffect(() =>{
    setFilteredBreweries( breweries.filter(b =>{
      return b.name.toLowerCase().includes(searchText.toLowerCase()) ||
      b.city.toLowerCase().includes(searchText.toLowerCase())
    })
    ) 
      },[searchText, breweries])
  

  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path='/login' render={()=>{
          return <Login loginUser={loginUser} setUser={setUser} />
        }}/>

        <Route exact path='/discover' render={()=>{
          return <Discover 
          breweries={breweries} 
          setBreweries={setBreweries} 
          reviews = {reviews}
          setReviews = {setReviews}
          users={users}/>
        }}/>
    
    <Route
          exact path="/breweries/:breweryId"
          render={()=>(
            <BreweryDetail breweries = {breweries} reviews = {reviews} users={users} />
          )}
        />

        
        <Route
          exact path="/"
          render={() => (
            <div >
              <SearchBar searchText= {searchText} setSearchText={setSearchText}/>
              <BreweriesList breweries={filteredBreweries} reviews = {reviews} users={users}/>
            </div>
          )}
        />
        <Route  path="/reviews/:reviewId/edit" render={() => (
          <ReviewEdit />
        )}/>
      
                
      </Switch>
      

  </div>
  )
}
}

    

