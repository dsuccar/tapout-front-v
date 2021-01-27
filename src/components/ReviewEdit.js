
import React, {useState, useEffect} from "react";
import { Form,  Button } from "semantic-ui-react"
import { Link } from "react-router-dom";

export default function ReviewEdit(props){

  const [text, setText] = useState("")

  function onUpdate(e,text){
    
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
            onChange={e => setText(e.target.value)}  />
    </Form.Field>

    <Link to={`/breweries/${props.review.brewery_id}`}>
    <Button onClick={(e)=> onUpdate(e,text)} type='submit'>Submit</Button>
        </Link>
  </Form>  

</div>
        
         
      
    )
  }



