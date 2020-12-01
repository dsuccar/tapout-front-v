import React, {useState, useEffect} from 'react'



export default function BreweryList(props) {

  console.log(props.brewery)

  return (
   <div >
     <h1>{props.brewery.name} </h1>  
    <h2>{props.brewery.city}</h2>
   </div>
  );
}
