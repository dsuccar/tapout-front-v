import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom"

import SearchBar from './components/SearchBar'
import ReviewDetail from './components/ReviewDetail'
import BreweriesList from './components/BreweriesList'
import BreweryDetail from './components/BreweryDetail'
import Discover from "./components/Discover"
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import CreateReview from './components/CreateReview'
import Login from './components/Login'
// import Login from './components/Login'



export default function App() { 

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(
    // id: 1, username:"Danny", password:"123"
  )

  const [breweries, setBreweries] = useState([])
  const [users, setUsers] = useState(null)
  const [reviews, setReviews] = useState([])

  const [searchText, setSearchText] = useState("")
  const [filteredBreweries, setFilteredBreweries] = useState([])

  const [selectedReview, setSelectedReview] = useState(null)
  const [selectedBrewery,setSelectedBrewery] =useState(null)






  useEffect(() => {
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
  },[])



  useEffect(() =>{
    setFilteredBreweries( breweries.filter(b =>{
      return b.name.toLowerCase().includes(searchText.toLowerCase()) ||
      b.city.toLowerCase().includes(searchText.toLowerCase())
    })
    ) 
      },[searchText, breweries])
  






  




      
    


  return (
    <div>
      <NavBar loggedIn={loggedIn} currentUser={currentUser}  />

      <Switch>
        {/* <Route exact path='/login' render={()=>{
          return <Login loginUser={loginUser} setUser={setUser} />
        }}/> */}
        
        <Route
          exact path="/"
          render={() => (
           <HomePage/>
          )} 
           />

           <Route
          exact path="/login"
          render={() => (
            <Login
              loggedIn = {loggedIn}
              setLoggedIn = {setLoggedIn}
              currentUser = {currentUser}
              setCurrentUser = {setCurrentUser} 
              users = {users}/>
          )} 
           />
        

        <Route
          exact path="/breweries"
          render={() => (
            <div >
              <SearchBar 
                searchText= {searchText} 
                setSearchText={setSearchText}/>

              <BreweriesList 
                breweries={filteredBreweries} 
                reviews = {reviews} 
                users={users}
                setSelectedBrewery ={setSelectedBrewery} 
              />
            </div>
          )}
        />

        <Route
          exact path="/breweries/:breweryId"
          render={()=>(

            <BreweryDetail
            loggedIn ={loggedIn} 
            currentUser = {currentUser}
            reviews = {reviews} 
            users = {users} 
            setSelectedReview = {setSelectedReview}
            selectedBrewery = {selectedBrewery}
            />
          )}
        />

        <Route exact path='/discover' render={()=>{
          return <Discover 
          breweries={breweries} 
          setBreweries={setBreweries} 
          reviews = {reviews}
          setReviews = {setReviews}
          users={users}/>
        }}/>
              

        <Route  path="/reviews/:reviewId/edit" render={() => (
          <ReviewDetail 
          selectedReview = {selectedReview}
          loggedIn = {loggedIn}
          setSelectedReview = {setSelectedReview}
          setReviews={setReviews}
          reviews = {reviews}/>
        )}/>

        <Route  path="/reviews/new" render={() => (
          <CreateReview
            selectedBrewery ={selectedBrewery}
            reviews = {reviews}
            setReviews = {setReviews}
            currentUser = {currentUser}
          />
          
        )}/>
      
                
      </Switch>
      

  </div>
  )
}


    

