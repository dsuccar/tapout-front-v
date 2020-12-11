
import React from "react";
import {TextArea} from "semantic-ui-react"




export default function ReviewEdit(props){
console.log("ReviewEdit",props)
  return (

      <div>
          <TextArea 
            type="text"
            value = {props.review.text}
            onChange={e => props.onChange({input: e.target.value, id:props.review.id})}
            
            />
      </div>
    )
  }



