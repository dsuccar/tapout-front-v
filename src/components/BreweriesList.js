import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";



export default function BreweryList(props) {

  // console.log("List Users",props.users)

  return (
    props.breweries.map(b=>
      <Link className="item" to={`/breweries/${b.id}`}>
      <div>
      <h1>{b.name} </h1>  
     <h2>{b.city}</h2>
    </div>
    </Link>
      )
  
  );
}