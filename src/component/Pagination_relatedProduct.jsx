import React, { Component } from "react";
import TableItem from "pages/user/pagination/related_product";
import axios from 'axios';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      currentPage: 1,
      newsPerPage: 4
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products'); 
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
      <div className="container">
        <div className="row">{renderTodos}</div>
       
       
      </div>
    );
  }
}

export default Pagination;
