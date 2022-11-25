import type {FC} from 'react';
import type {Product} from '../../../types/shop';

import ProductCard from './components/ProductCard';

interface Props {
  products: Product[];
}

const Products: FC<Props> = ({products}) => {
  return (
    <div className="flex flex-wrap justify-between gap-y-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
