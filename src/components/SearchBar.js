import React, {useState, useEffect} from 'react'

export default function SearchBar(props) {

 



  
  return (
   <div>
   
    <input
    type="text"
    placeholder="Search"
    value={props.searchText}
    onChange={e => props.setSearchText(e.target.value)}
    
    />
  
    
 
    
   </div>
  );
}