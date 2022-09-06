import React from 'react'

import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Laurent', text: 'It ain\'t bragging if it\'s true '},
  {id: 'q2', author: 'Zest', text:'Work, Live, and Create'}
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
}

export default AllQuotes