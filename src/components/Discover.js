import React, {useState} from 'react'
import BreweryList from './BreweryList'
import SearchBar from './SearchBar'

export default function Discover(props) {
 
  const [searchText, setSearchText] = useState("")
  
function changeSearchText(text) {
  setSearchText(text)
}

const filteredBreweries =
   props.breweries.filter(b =>{
     return b.name.toLowerCase().includes(searchText.toLowerCase()) ||
     b.city.toLowerCase().includes(searchText.toLowerCase())
    }
      //   .toLowerCase()
      //   .includes(this.state.searchText.toLowerCase())
  )


console.log(searchText)
  return (
   <div >
    <SearchBar searchText= {searchText} changeSearchText={changeSearchText}/>
    {filteredBreweries.map(brewery =>
      <BreweryList brewery = {brewery} />  
    )} 
    
   </div>
  );
}


 
