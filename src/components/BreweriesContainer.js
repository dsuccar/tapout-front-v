import React, {useState, useEffect} from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import SearchBar from './SearchBar'
import ReviewEdit from './ReviewEdit'

import BreweriesList from './BreweriesList'
import BreweryDetail from './BreweryDetail'


export default function BreweriesContainer(props) {

  const [searchText, setSearchText] = useState("")
  const [filteredBreweries, setFilteredBreweries] = useState([])


  useEffect(() =>{
    setFilteredBreweries( props.breweries.filter(b =>{
      return b.name.toLowerCase().includes(searchText.toLowerCase()) ||
      b.city.toLowerCase().includes(searchText.toLowerCase())
    })
    ) 
      },[searchText, props.breweries])
  
  console.log("Breweries Users", props.users)

  return (
    <div>
      <Switch>
        
        <Route
          exact path="/breweries/:breweryId"
          render={()=>(
            <BreweryDetail breweries = {props.breweries} reviews = {props.reviews} users={props.users} />
          )}
        />

        
        <Route
          exact path="/"
          render={() => (
            <div >
              <SearchBar searchText= {searchText} setSearchText={setSearchText}/>
              <BreweriesList breweries={filteredBreweries} reviews = {props.reviews} users={props.users}/>
            </div>
          )}
        />
        <Route  path="/reviews/:reviewId/edit" render={() => (
          <ReviewEdit />
        )}/>
      </Switch>
    </div>
  );
}
