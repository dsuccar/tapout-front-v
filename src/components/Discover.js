import React, {useState, useEffect} from 'react'
import BreweriesContainer from './BreweriesContainer'

export default function Discover(props) {
 
  return (
   <div >
    
    
      <BreweriesContainer 
      breweries = {props.breweries} 
      reviews = {props.reviews}
      users={props.users}
      />  
   
    
    
   </div>
  );
}


 
