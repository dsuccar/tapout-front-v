
import React from "react";
import { Link } from "react-router-dom";
import {Header,Comment} from "semantic-ui-react"

export default function BreweryDetail(props){
console.log("brewery Detail users",props.users)
  return (

    <div>
     
   
      <Comment.Group>
    <Header as='h3' dividing>
      Reviews
    </Header>
   
      {props.reviews.map(review=>
      <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{props.users.find(user => user.id === review.user_id).username}</Comment.Author>
        <Comment.Metadata>
          <div>{review.created_at}</div>
        </Comment.Metadata>
        <Comment.Text>{review.text}</Comment.Text>
        <Link to={`/reviews/${review.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
      </Comment.Content>
    </Comment>
         )}
  </Comment.Group> 

    </div>
      )
    
      }



