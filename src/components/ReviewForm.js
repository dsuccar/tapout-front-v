
import React, { useState } from "react";
import { Form,  Button } from "semantic-ui-react"
import Ratings from 'react-ratings-declarative'


export default function ReviewForm(props){

  const [text, setText] = useState(props.selectedReview.text)
  const [rating, setRating] = useState(props.selectedReview.rating)



console.log(rating)
const info = {
  text: text,
  rating: rating
}
    
  return (
  
  <div>
  <Form >
    <Form.Field>
      <label>Review:</label>
      <Ratings
          rating={rating}
          widgetRatedColors="yellow"
          changeRating={(newRating)=> setRating(newRating)}
           >
          <Ratings.Widget/>
          <Ratings.Widget/>
          <Ratings.Widget/>
          <Ratings.Widget/>
          <Ratings.Widget/>

            </Ratings>
      <Form.Input className="ui field"
            name="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}  />
    </Form.Field>

      <Button onClick={(e)=> props.handleChange(e,info)} type='button'>
        Submit
      </Button>


  </Form>  

</div>
        
         
      
    )
  }



