
import React, {useState, useEffect} from "react";
import { Link, useParams, useLocation, useRouteMatch,useHistory } from "react-router-dom";
import {Header,Comment} from "semantic-ui-react"

export default function BreweryDetail(props){

const [brewery, setBrewery] = useState()




  // console.log("still working on whats going on", breweryId(window.location.pathname), props.breweries.filter(brewery => brewery.id.toString() === breweryId(window.location.pathname)), props.breweries)
  
  // Get spec brewery id from url
    useEffect(()=> {
  const n = window.location.pathname.lastIndexOf('/');
  let breweryId = window.location.pathname.substring(n + 1)
  let findBrewery = props.breweries.find(brewery => brewery.id.toString() === breweryId.toString())
  console.log("testing", findBrewery)
  return setBrewery(findBrewery)
},[setBrewery])

console.log(brewery)
  return  ( !props.breweries ? null:(
 
    <div>
     
   
    <Comment.Group>
    <Header>{brewery.name}</Header>
    <Header as='h3' dividing>
      Reviews
    </Header>
   
      {props.reviews.map(review=>
     
      <Comment key = {review.id}>
      <Comment.Content> 
        {/* <Comment.Author as='a'> {console.log(id, props.reviews.filter(review => 
          review.brewery_id === review.user_id))} {props.users.find(user => user.id === review.user_id).username}</Comment.Author> */}
        
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
    
))}
      
    
      



