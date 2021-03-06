import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import BookSearch from './BookSearch.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">

        <Route path='/search' render={() => (
          <BookSearch />
        )}/>

        <Route exact path='/' render={() => (
          <BookList
            books={this.state.books}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
