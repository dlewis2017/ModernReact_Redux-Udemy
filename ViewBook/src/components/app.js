import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
/* Local */
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';


export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  };
};
