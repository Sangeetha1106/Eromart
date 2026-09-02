import { useNavigate, useParams } from 'react-router-dom';
import Products from './Products';
import { Product } from './productData';

type ExploreMoreProductPageProps = {
  addToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
};

export default function ExploreMoreProductPage({ addToCart, onProductClick }: ExploreMoreProductPageProps) {
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleBack = () => {
    if (productId && productId !== 'general') {
      navigate(`/product/${productId}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Products
      isExploreMorePage={true}
      addToCart={addToCart || (() => {})}
      onProductClick={onProductClick || (() => {})}
      goBack={handleBack}
    />
  );
}
