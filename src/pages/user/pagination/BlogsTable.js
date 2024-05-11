import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BsCalendar } from "react-icons/bs";

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      newsPerPage: 5,
    };
  }

  render() {
    const { data } = this.props;
    // Function to format date
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Use toLocaleDateString to format date
    };

    return (
      <div className="col-lg-4 col-md-6 col-sm-6" key={data.id}>
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            style={{
              backgroundImage: `url(${require("../images/blogs/" +
                data.image)})`,
            }}
          ></div>
          <div className="blog__item__text">
            <span>
              <BsCalendar /> {formatDate(data.created_at)}
            </span>
            <h5>{data.name}</h5>
            <Link to={`/blogs/${data.id}`}>Read More</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default TableItem;
