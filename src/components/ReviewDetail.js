
import React, { useState } from "react";
import { Form,  Button } from "semantic-ui-react"
import { useHistory } from "react-router-dom";


export default function ReviewDetail(props){

  const [text, setText] = useState(props.review.text)

  const history = useHistory()

  const handleHistory = () => {
    history.push(
      `/breweries/${props.review.id}`
   
    )
  }



  function handleChange(e,text){

   const info = {
      text: text
    }
  
    props.updateReviewText(e, info)
    handleHistory()
    
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

    
      <Button onClick={(e)=> handleChange(e,text)} type='submit'>
        Submit
      </Button>


      {/* {/* <Button onClick={(e)=> props.handleDelete(e,text)}> */}
        {/* Delete */}
      {/* </Button> */} 
  

  </Form>  

</div>
        
         
      
    )
  }



