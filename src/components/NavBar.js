import React, {useState, useEffect} from 'react'
import {Button, Grid} from 'semantic-ui-react'
  import { Link } from "react-router-dom";
  
  
  
  export default function NavBar(props) {
  
    // console.log("List Users",props.loginUser)
  
    return (
 
      <Grid>
      <Grid.Row>
        <Grid.Column width={10}>
    
      <h1>
        "Please Drink & Thrive"
      </h1>
      </Grid.Column>
   

      <Grid.Column>
        <Link className="item" to={`/`}>
          <Button>Breweries</Button>
        </Link>
      </Grid.Column>
      
      </Grid.Row>
      </Grid>
    
      
        


      
        )
    
  }
  
  