import type {FC} from 'react';
import type {Product} from '../../../../types/shop';

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({product}) => {
  return (
    <div className="w-64">
      <img src={product.image} alt="product" className="w-64 h-auto mb-5" />

      <div className="text-center">
        <div className="text-gray-500">weight: {product.weight}</div>

        <h3 className="font-semibold text-xl  cursor-pointer hover:text-sky-500">
          {product.name}
        </h3>

        <div className="text-lg font-semibold text-gray-500">
          ${product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
