import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    sale: 0,
    category: "",
    tags: "",
    imgdetail_1: "",
    imgdetail_2: "",
    imgdetail_3: "",
    descriptions: "",
    color: "",
    product_info: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    // Cắt bỏ phần đường dẫn không mong muốn từ tên tệp hình ảnh
    const imageName = event.target.files[0].name;
    setFormData({
      ...formData,
      [event.target.name]: imageName,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/products", formData);
      alert("Sản phẩm đã được tạo thành công!");
      // Sau khi gửi thành công, bạn có thể thực hiện các thao tác tiếp theo, như chuyển hướng người dùng hoặc làm mới form
      setFormData({
        name: "",
        image: "",
        price: 0,
        sale: 0,
        category: "",
        tags: "",
        imgdetail_1: "",
        imgdetail_2: "",
        imgdetail_3: "",
        descriptions: "",
        color: "",
        product_info: "",
      });
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Đã xảy ra lỗi khi tạo sản phẩm. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="container">
      <br/>
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-8">
          <label htmlFor="name">Tên sản phẩm:</label>
          <input className="col-12"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4">
          <label htmlFor="image">Ảnh sản phẩm:</label>
          <input
          className="col-12"
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="col-4">
          <label htmlFor="price">Giá:</label>
          <input
          className="col-12"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4">
          <label htmlFor="sale">Giảm giá:</label>
          <input
          className="col-12"
            type="number"
            id="sale"
            name="sale"
            value={formData.sale}
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <label htmlFor="category">Danh mục:</label>
          <input
          className="col-12"
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="tags">Tags:</label>
          <input
          className="col-12"
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="color">Màu sắc:</label>
          <input
          className="col-12"
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <label htmlFor="imgdetail_1">Ảnh chi tiết 1:</label>
          <input
          className="col-12"
            type="file"
            id="imgdetail_1"
            name="imgdetail_1"
            onChange={handleImageChange}
          />
        </div>
        <div className="col-4">
          <label htmlFor="imgdetail_2">Ảnh chi tiết 2:</label>
          <input
          className="col-12"
            type="file"
            id="imgdetail_2"
            name="imgdetail_2"
            onChange={handleImageChange}
          />
        </div>
        <div className="col-4">
          <label htmlFor="imgdetail_3">Ảnh chi tiết 3:</label>
          <input
          className="col-12"
            type="file"
            id="imgdetail_3"
            name="imgdetail_3"
            onChange={handleImageChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="descriptions">Mô tả:</label>
          <textarea
          className="col-12"
            id="descriptions"
            name="descriptions"
            value={formData.descriptions}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div className="col-6">
          <label htmlFor="product_info">Thông tin sản phẩm:</label>
          <textarea
          className="col-12"
            id="product_info"
            name="product_info"
            value={formData.product_info}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">Tạo sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
