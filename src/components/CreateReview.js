import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Button, Header, Image, Modal } from 'semantic-ui-react'


import ReviewForm from './ReviewForm'

export default function CreateReview(props) {

  const [open, setOpen] = useState(false)

  const history = useHistory()

  

  function handleChange(e,text){

    const info = {
      user_id: 1,
      brewery_id: props.selectedBrewery.id,
      text: text
    }
      createReview(e,info)
      setOpen(true)
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
   .then(rev =>{

    props.setReviews([...props.reviews, rev])

   } )

   

  }
  
  console.log("testing reviews", props.reviews)

  return (
<div>
<Modal
      trigger={<Button>Show Modal</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
  <ReviewForm
    selectedReview = {{text:""}} 
    handleChange = {handleChange}/>
</div>
      
      )
    }