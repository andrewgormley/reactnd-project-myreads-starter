import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class BookSearch extends Component {

  state = {
    query: '',
    books: []
  }

  updateQuery =(query) => {
    this.setState({
      query
  })

  BooksAPI.search(query,25).then(results => {
      if(results.length > 0) {
        this.setState({
          books:results
        })
      } else {
        this.setState({
          books:[]
        })
      }
    })
  }

  render() {

    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length ? (
               this.state.books.map((book) => {
                return (
                  <li key={book.id}>
                     <Book
                        book={book}
                      />
                  </li>)
                })
             ):<div>Currently showing no results</div>}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
