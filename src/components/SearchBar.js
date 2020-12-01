import React, {useState, useEffect} from 'react'

export default function SearchBar(props) {

 



  
  return (
   <div>
   
    <input
    type="text"
    placeholder="Search"
    value={props.searchText}
    onChange={e => props.changeSearchText(e.target.value)}
    
    />
  
    
 
    
   </div>
  );
}