
import React from "react";
import {useHistory } from "react-router-dom";
import {Header,Comment, Button} from "semantic-ui-react"
import ReviewList from './ReviewList'

export default function BreweryDetail(props){




const history = useHistory()

  function handleCreateReview(){
    history.push(
      `/reviews/new`
    )
  }

  return  ( !props.selectedBrewery ? null:(
 
    <div>
     
   
    <Comment.Group>
    <Header as='h1'>{props.selectedBrewery.name}</Header>
      <Button onClick = {handleCreateReview}>
        Leave A Review
      </Button>
    <Header as='h3' dividing>
      Reviews
    </Header>

  <ReviewList 
  loggedIn = {props.loggedIn}
  currentUser = {props.currentUser}
  setSelectedReview = {props.setSelectedReview} 
  selectedBrewery={props.selectedBrewery} 
  users={props.users} 
  reviews={props.reviews}/>
     
  </Comment.Group> 

    </div>
    
))
}
      
    
      



