import { useParams } from 'react-router-dom';
import products from 'dataaaaaa';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Lấy thông tin chi tiết sản phẩm từ ID
  const product = products.find(item => item.id === parseInt(id));

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;