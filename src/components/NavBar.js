import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
  import { Link } from "react-router-dom";
  
  
  
  export default function NavBar(props) {
  
    // console.log("List Users",props.loginUser)
  
    return (
 
      <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
    
      <h1>
        "Please Drink & Thrive"
      </h1>
      </Grid.Column>
   

      <Grid.Column width={5}>
        <Link className="item" to={`/breweries`}>
          <Button>Breweries</Button>
        </Link>
      </Grid.Column>
      
      <Grid.Column>
      {( !props.loggedIn ? 
    (  
      <Link className="item" to={`/login`}>
      <Button>Login</Button>
    </Link>
    )
      :
      (
        <div>
        {props.currentUser.username}
        </div>
     
      ))}
      </Grid.Column>
      
      </Grid.Row>
      </Grid>
    
      
        


      
        )
    
  }
  
  