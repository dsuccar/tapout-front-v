import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

import ReviewForm from './ReviewForm'

export default function CreateReview(props) {


  const history = useHistory()

  function handleChange(e,text){

    const info = {
      user_id: 1,
      brewery_id: props.selectedBrewery.id,
      text: text
    }
      createReview(e,info)
      history.push(
        `/breweries/${props.selectedBrewery.id}`
      )
  }

  function createReview(e,info){
    e.preventDefault()

    fetch(`http://localhost:3000/reviews/`, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Accept": "application/json"
      },
    body: JSON.stringify(info)
    }
    ).then(res => res.json())
   .then(rev => props.setReviews([...props.reviews, rev]))
  }
  
  console.log("testing reviews", props.reviews)

  return (
<div>
  <ReviewForm
    selectedReview = {{text:""}} 
    handleChange = {handleChange}/>
</div>
      )
  
 
}
