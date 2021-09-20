import React, { Component } from 'react'
import QuoteAPI from '../api/QuoteAPI.js'
import QuotePage from './QuotePage.js'

class HomePage extends Component {
  state = {
    quotes: []
  }

  componentDidMount(){
    QuoteAPI.fetchQuotes()
    .then((apiResponseJSON)=> {
      this.setState({
        quotes: apiResponseJSON.quotes
      })
    })
  }


  render() {
    return (
      <div>
        <h1> All quotes </h1>
        <QuotePage quotes={this.state.quotes} />
      </div>
    )
  }
}

export default HomePage