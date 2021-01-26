import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'



export default function HomePage(props) {
 
  return (
   <div >
    

    <Link to={`/breweries`}>
      <Button content="Brewery"/>
      </Link>

    <Link to={`/discover`}>
      <Button content="Discover"/>
      </Link>
    
   </div>
  );
}


 
