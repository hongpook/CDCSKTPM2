import React, { Component } from "react";
import TableItem from "./TableItem";
import './style.scss';

import DataProducts from '../../../data';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: DataProducts,
      currentPage: 1,
      newsPerPage: 8
    };
  }

  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { newsList, currentPage, newsPerPage } = this.state;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
      return (
        <TableItem
          stt={index + 1 + (currentPage - 1) * newsPerPage}
          key={index}
          data={todo}
        />
      );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="App">
        <div className="container">
          <div className="row">{renderTodos}</div>
        </div>
        <div className="pagination-custom">
          <ul id="page-numbers">
            {pageNumbers.map((number) => {
              if (this.state.currentPage === number) {
                return (
                  <li key={number} id={number} className="active">
                    {number}
                  </li>
                );
              } else {
                return (
                  <li key={number} id={number} onClick={this.chosePage}>
                    {number}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Pagination;
