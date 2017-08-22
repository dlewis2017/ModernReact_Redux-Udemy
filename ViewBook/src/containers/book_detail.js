import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    console.log(this.props);
    if (!this.props.book) { //prevent title of null error (wait for book)
      return <div>Select a book to get started.</div>
    }

    return ( //return current book details
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
};

export default connect(mapStateToProps)(BookDetail);
