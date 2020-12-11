import React, {useState, useEffect} from 'react'
import {Button} from 'semantic-ui-react'
  import { Link } from "react-router-dom";
  
  
  
  export default function NavBar(props) {
  
    console.log("List Users",props.loginUser)
  
    return (
    
     <div>
      <h1>
        "Please Drink & Thrive"
      </h1>
  
      <div>
      <Link className="item" to={`/login`}>
        
      <Button>ClICK ON THIs ShIT</Button>
      </Link>
      </div>
        
        
      <div></div>

      
      </div>  
        )
    
  }
  
  