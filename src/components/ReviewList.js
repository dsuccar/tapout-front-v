
import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import {Comment} from "semantic-ui-react"

export default function ReviewList(props){







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
        {!!props.loggedIn && review.user_id === props.currentUser.id ?
         <Link to={`/reviews/${review.id}/edit`}>
         <button onClick={() => props.setSelectedReview(review)} className="ui button">Edit</button>
       </Link>
        :
        null
      }
        
      </Comment.Content>
    </Comment>
         )}
    </div>
    
))
}
      
    
      



