import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'



export default function Login(props) {

  const [user, setUser] = useState({username:"",password:""})
  

  const handledChange = (e) => {
    e.preventDefault()
    setUser({[e.target.name]:e.target.value})
      
    }


  console.log(user)
  
  
  return (
  
     
    
      <div>
      
    <Grid columns='equal'>   
      <Grid.Column >
      </Grid.Column>
    <Grid.Column  >
 
      <Segment>
        
        <Segment placeholder >
        <Grid columns={2}  >
          <Grid.Column >
          <h1>Sign In:</h1>
            <Form>
              <Form.Input
                placeholder='Log In' 
                name='username' 
                type='text' 
                onChange={handledChange} 
                value={user.username}
              />
              <Form.Input
              placeholder='password' 
              name='password' 
              type='text' 
              onChange={handledChange} 
              value={user.password}
            />
      
              <Button 
              content='submit' 
              value='Sign In' 
              onSubmit={
                setUser(user)
                } />
            </Form>
          </Grid.Column>
    
          <Grid.Column verticalAlign='middle'>
            
            <Button 
            content='New User' 
            icon='signup' 
            size='big' 
            as={Link} 
            to="/new_user"/>
          </Grid.Column>
        </Grid>
    
        <Divider vertical>Or</Divider>
      </Segment>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      
    </Grid.Column>
    <Grid.Row></Grid.Row>
  </Grid>
 
  </div>
    )
      
  
}

