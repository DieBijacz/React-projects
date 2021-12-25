import React, {useState} from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import { feedbackData } from './data/FeedbackData'

export default function App() {

  const [feedback, setFeedback] = useState(feedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

