import React from 'react';

class CutContentCommponent extends React.Component {
  render() {
    // Lấy giá trị của props paragraph từ component cha
    const paragraph = this.props.paragraph;

    // Tách các từ thành một mảng
    const words = paragraph.split(',');

    // Tạo một mảng các phần tử li
    const listItems = words.map((word, index) => {
      return <li key={index}>{word}</li>;
    });

    // Return phần tử sử dụng listItems
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default CutContentCommponent;
