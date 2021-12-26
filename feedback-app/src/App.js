import React, {useState} from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import { feedbackData } from './data/FeedbackData'
import {v4 as uuidv4} from 'uuid'

export default function App() {

  const [feedback, setFeedback] = useState(feedbackData)

  // add feedback UI
  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
    // add id to newFeedback with uuid
    newFeedback.id = uuidv4()
    // sets array of new and prev feedbacks 
    setFeedback([newFeedback, ...feedback])
  }

  // delete feedback UI
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))    
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList 
          feedback={feedback} 
          handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

