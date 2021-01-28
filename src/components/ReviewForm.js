
import React, { useState } from "react";
import { Form,  Button } from "semantic-ui-react"
import { Link } from "react-router-dom";

export default function ReviewForm(props){

  const [text, setText] = useState(props.review.text)



  function handleChange(e,text){

   const info = {
      text: text
    }
  
    props.updateReviewText(e, info)
 
  }
  return (
  
  <div>
  <Form >
    <Form.Field>
      <label>Review:</label>
      <Form.Input className="ui field"
            name="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}  />
    </Form.Field>

    {/* <Link to={`/breweries/${props.review.brewery_id}`}> */}
      <Button onClick={(e)=> handleChange(e,text)} type='submit'>
        Submit
      </Button>
    {/* </Link> */}

  </Form>  

</div>
        
         
      
    )
  }



