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
// import Login from './components/Login'



export default function App() { 

 
  const [breweries, setBreweries] = useState([])
  const [users, setUsers] = useState(null)
  const [reviews, setReviews] = useState([])
  const [loginUser, setLoginUser] = useState({})
  const [searchText, setSearchText] = useState("")
  const [filteredBreweries, setFilteredBreweries] = useState([])
  const [selectedReview, setSelectedReview] = useState(null)




  useEffect(()=> {
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
  },[selectedReview])




  useEffect(() =>{
    setFilteredBreweries( breweries.filter(b =>{
      return b.name.toLowerCase().includes(searchText.toLowerCase()) ||
      b.city.toLowerCase().includes(searchText.toLowerCase())
    })
    ) 
      },[searchText, breweries])
  

  function updateReviewText(e,text){
  e.preventDefault()
      fetch(`http://localhost:3000/reviews/${selectedReview.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type" : "application/json",
          "Accept": "application/json"
          },
        body: JSON.stringify(text)
        }
        ).then(res => res.json())
       .then(rev => console.log("review", rev))
   
 
  }

  function addReview(){
console.log("ADD REVIEWS")
  }

      
    


  return (
    <div>
      <NavBar />

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
          exact path="/breweries"
          render={() => (
            <div >
              <SearchBar searchText= {searchText} setSearchText={setSearchText}/>
              <BreweriesList breweries={filteredBreweries} reviews = {reviews} users={users}/>
            </div>
          )}
        />


props.users.find(user => user.id === review.user_id)
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

            <BreweryDetail breweries = {breweries} 
                           reviews = {reviews} 
                           users = {users} 
                           setSelectedReview = {setSelectedReview}/>
          )}
        />

        <Route  path="/reviews/:reviewId/edit" render={() => (
          <ReviewDetail review = {selectedReview} updateReviewText = {updateReviewText}/>
        )}/>
      
                
      </Switch>
      

  </div>
  )
}


    

