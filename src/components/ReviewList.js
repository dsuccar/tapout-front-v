
import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import {Header,Comment, Button} from "semantic-ui-react"

export default function ReviewList(props){

const [brewery, setBrewery] = useState()
const [reviews, setReviews] = useState()
const [user, setUser] = useState()

// console.log("brewery detail", props)


const history = useHistory()

  

  return  ( !props.selectedBrewery ? null:(
 
    <div>
     
     {props.reviews.filter(uniqueReview=> 
        uniqueReview.brewery_id === props.selectedBrewery.id).map(review => 
     
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
    </div>
    
))
}
      
    
      



