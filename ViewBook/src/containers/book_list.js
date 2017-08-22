import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
/* Local */
import { selectBook } from '../actions/index';


class BookList extends Component {
  /* return each book in props */
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  };

  /* Display objects to screen */
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };

};

/* take application state and show up as props in BookList*/
function mapStateToProps(state) {
  return {
    books: state.books
  };
};

/* When select book called, pass result to all reducers*/
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
