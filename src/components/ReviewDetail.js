
import React, { useState } from "react";
import { Form,  Button } from "semantic-ui-react"
import { useHistory } from "react-router-dom";

import ReviewForm from './ReviewForm'



export default function ReviewDetail(props){

 

  const history = useHistory()
  

  function handleChange(e,text){

    const info = {text: text}
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

    props.setSelectedReview(rev)
   })}




console.log("SelectedReview",props.selectedReview)

  return (
  
  <div>
  <ReviewForm handleChange={handleChange} selectedReview = {props.selectedReview}/>

</div>
        
         
      
    )
  }



