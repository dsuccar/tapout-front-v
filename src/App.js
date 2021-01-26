import React, { useState, useEffect } from 'react'
import './App.css';
import {Route,Switch, Link, useHistory} from "react-router-dom"

import SearchBar from './components/SearchBar'
import ReviewEdit from './components/ReviewEdit'
import BreweriesList from './components/BreweriesList'
import BreweryDetail from './components/BreweryDetail'
import Discover from "./components/Discover"
import NavBar from './components/NavBar'
// import Login from './components/Login'



export default function App() { {

 
  const [breweries, setBreweries] = useState([])
  const [users, setUsers] = useState(null)
  const [reviews, setReviews] = useState([])
  const [loginUser, setLoginUser] = useState({})
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

  // }

  // const setUser = (loginInfo) =>{
    
  // fetch("http://localhost:3000/users")
  // .then(res => res.json())
  // .then(allUsers => 
  //   allUsers.forEach(
  //     user => {
  //       if(user.username === loginInfo.username && user.password.toString() === loginInfo.password.toString()){
  //         setLoginUser({user})

  //         console.log("here to test")
  //       } else {
  //         console.log(user.username, loginInfo.username,user.password,loginInfo.password)
  //       }
  //     }
  //   )
  //   )

  }

  useEffect(fetchCalls, [])


 

  useEffect(() =>{
    setFilteredBreweries( breweries.filter(b =>{
      return b.name.toLowerCase().includes(searchText.toLowerCase()) ||
      b.city.toLowerCase().includes(searchText.toLowerCase())
    })
    ) 
      },[searchText, breweries])
  
      console.log("loginUser",loginUser)
    


  return (
    <div>
      <NavBar />

      <Switch>
        {/* <Route exact path='/login' render={()=>{
          return <Login loginUser={loginUser} setUser={setUser} />
        }}/> */}

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
                           users={users} />
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

    

