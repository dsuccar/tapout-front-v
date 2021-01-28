
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {Header,Comment} from "semantic-ui-react"

export default function BreweryDetail(props){

const [brewery, setBrewery] = useState()
const [reviews, setReviews] = useState()
const [user, setUser] = useState()



    useEffect(()=> {
      // set specific brewery
  const n = window.location.pathname.lastIndexOf('/');
  let breweryId = window.location.pathname.substring(n + 1)
  let findBrewery = props.breweries.find(brewery => brewery.id.toString() === breweryId.toString())

      // find reviews that belong to spec brewery
  const reviewIds = props.reviews.filter(review=> review.brewery_id == findBrewery.id)

      // set brewery, review
  return setBrewery(findBrewery), setReviews(reviewIds)

},[])



  return  ( !brewery ? null:(
 
    <div>
     
   
    <Comment.Group>
    <Header as='h1'>{brewery.name}</Header>
      <Button>
        Leave A Review
      </Button>
    <Header as='h3' dividing>
      Reviews
    </Header>
   
      {reviews.map(review=>
     
      <Comment key = {review.id}>
      <Comment.Content> 
        <Comment.Author as='a'> {props.users.find(user => user.id === review.user_id).username}</Comment.Author>
        
        <Comment.Metadata>
          <div>{review.created_at}</div>
        </Comment.Metadata>
        <Comment.Text>{review.text}</Comment.Text>
        <Link to={`/reviews/${review.id}/edit`}>
          <button onClick={() => props.setSelectedReview(review)} className="ui button">Edit</button>
        </Link>
      </Comment.Content>
    </Comment>
         )}
  </Comment.Group> 

    </div>
    
))}
      
    
      



