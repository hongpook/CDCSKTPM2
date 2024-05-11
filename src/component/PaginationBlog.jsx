import React, { Component } from "react";
import TableItem from "pages/user/pagination/BlogsTable";
import axios from 'axios';

class PaginationBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      currentPage: 1,
      newsPerPage: 8
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/blogs'); 
      this.setState({ newsList: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
      <div className="pagination">
        <div className="row">{renderTodos}</div>
       
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

export default PaginationBlogs;
