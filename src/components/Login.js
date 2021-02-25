import React, {useState} from 'react'
import { Link, useHistory} from "react-router-dom";
import { Button, Divider, Form, Grid, Segment,Header } from 'semantic-ui-react'



export default function Login(props) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [warning, setWarning] = useState("")

  const history = useHistory()

  

  function handleSubmit(username,password){

    const userInfo = {
      username: username.toString(),
      password: password.toString()
    }

    const findUser = props.users.find(user => user.username === userInfo.username && user.password === userInfo.password)

    if(!!findUser){
      props.setLoggedIn(true)
      props.setCurrentUser(findUser)
      goHome()
    } else {
      setWarning("The username and password you entered did not match our records. Please double-check and try again.")
    }

    function goHome(){
      history.push(
        `/`
      )
    }
  
    // props.users.find(user => user.username === userInfo.username)
    
    
  }



  
  
  return (
  
     
    
      <div>

    <Grid columns='equal'>   
    
      <Grid.Column >
      </Grid.Column>
    <Grid.Column  >
    <Header as ='h4' color='red'> 
                {warning}
                </Header>
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
                onChange={(e)=> setUsername( e.target.value)} 
                value={username}
              />
              <Form.Input
              placeholder='password' 
              name='password' 
              type='text' 
              onChange={(e)=> setPassword( e.target.value )} 
              value={password}
            />
      
              <Button 
              content='Submit' 
              value='Sign In' 
              onClick={
                () => handleSubmit(username,password)
                }
              type='button' />
               
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

