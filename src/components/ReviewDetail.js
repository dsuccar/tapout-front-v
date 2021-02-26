
import React from "react";
import {  Button } from "semantic-ui-react"
import { useHistory } from "react-router-dom";

import ReviewForm from './ReviewForm'



export default function ReviewDetail(props){

 

  const history = useHistory()
  

  function handleChange(e,info){
      fetchUpdatedText(e,info)
      history.push(
        `/breweries/${props.selectedReview.id}`
      )
  }




  function fetchUpdatedText(e,info){
   
  e.preventDefault()
  fetch(`http://localhost:3000/reviews/${props.selectedReview.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json",
      "Accept": "application/json"
      },
    body: JSON.stringify(info)
    }
    ).then(res => res.json())
   .then(rev => {

     const oldReview = props.reviews.find(review=> review.id === rev.id)
     oldReview.text = rev.text
     oldReview.rating = rev.rating

    props.setSelectedReview(rev)
   })}


  function handleDelete(){
    fetch(`http://localhost:3000/reviews/${props.selectedReview.id}`,{
      method: "DELETE"
    }).then(props.setReviews(props.reviews.filter(review => review.id !== props.selectedReview.id)))
    
 history.push(
        `/breweries/${props.selectedReview.id}`
      )
  }



  return (
  
  <div>
  <ReviewForm 
    handleChange={handleChange} 
    selectedReview = {props.selectedReview}/>
  <Button onClick = {handleDelete}>Delete</Button>
</div>
        
         
      
    )
  }



