import { useNavigate, useParams } from 'react-router-dom';
import Products from './Products';
import { Product, cashCountingMachineProducts, billingMachineProducts } from './productData';

type ExploreMoreProductPageProps = {
  addToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
  category?: string;
};

export default function ExploreMoreProductPage({ addToCart, onProductClick, category }: ExploreMoreProductPageProps) {
  const navigate = useNavigate();
  const { productId } = useParams();
  
  const activeCategory = category || productId;

  const handleBack = () => {
    if (productId && productId !== 'general') {
      navigate(`/product/${productId}`);
    } else {
      navigate('/');
    }
  };

  let customProductsList: Product[] | undefined = undefined;
  let pageTitle = "Explore More";
  let pageSubtitle = "Machines";
  
  if (activeCategory === 'cash-counting-machine') {
    customProductsList = cashCountingMachineProducts;
    pageTitle = "Cash Counting";
    pageSubtitle = "Machines";
  } else if (activeCategory === 'billing-machine') {
    customProductsList = billingMachineProducts;
    pageTitle = "Billing";
    pageSubtitle = "Machines";
  }

  return (
    <Products
      isExploreMorePage={true}
      addToCart={addToCart || (() => {})}
      onProductClick={onProductClick || (() => {})}
      goBack={handleBack}
      productsList={customProductsList}
      exploreTitle={pageTitle}
      exploreSubtitle={pageSubtitle}
    />
  );
}
