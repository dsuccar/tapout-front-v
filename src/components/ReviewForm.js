
import React, { useState } from "react";
import { Form,  Button } from "semantic-ui-react"


export default function ReviewForm(props){

  const [text, setText] = useState(props.selectedReview.text)

 




    
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
      <Button onClick={(e)=> props.handleChange(e,text)} type='button'>
        Submit
      </Button>
    {/* </Link> */}

  </Form>  

</div>
        
         
      
    )
  }



