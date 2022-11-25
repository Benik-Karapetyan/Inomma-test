import type {Product} from '../types/shop';

import {useState, useEffect} from 'react';
import moment from 'moment';

import Toolbar from '../components/shop/Toolbar';
import Products from '../components/shop/Products/Products';

import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';

const products: Product[] = [
  {
    id: 1,
    name: 'Quartz Belt Watch',
    price: 100,
    weight: 1000,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product1,
  },
  {
    id: 2,
    name: 'Women Freshwash',
    price: 100,
    weight: 1000,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product2,
  },
  {
    id: 3,
    name: 'Room Flash Light',
    price: 100,
    weight: 1000,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product3,
  },
  {
    id: 4,
    name: 'Room Flash Light',
    price: 100,
    weight: 1000,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product4,
  },
  {
    id: 5,
    name: 'Man Office Bag',
    price: 100,
    weight: 500,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product5,
  },
  {
    id: 6,
    name: 'Charging Car',
    price: 100,
    weight: 500,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product6,
  },
  {
    id: 7,
    name: 'Blutooth Speaker',
    price: 100,
    weight: 500,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product7,
  },
  {
    id: 8,
    name: 'Charging Car',
    price: 100,
    weight: 100,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product8,
  },
  {
    id: 9,
    name: 'Quartz Belt Watch',
    price: 100,
    weight: 100,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product1,
  },
  {
    id: 10,
    name: 'product10',
    price: 100,
    weight: 50,
    startDate: new Date('11.01.2022'),
    endDate: new Date('11.31.2022'),
    image: product2,
  },
];

const Shop = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const getActiveProducts = (products: Product[]) => {
    const today = moment();

    return products.filter(
      (p) => today.isAfter(p.startDate) && today.isBefore(p.endDate)
    );
  };

  const filterByWeight = (products: Product[], perPage: number) => {
    const productsWithRelevance = products.map((p) => ({
      ...p,
      relevance: Math.random() * p.weight,
    }));

    const filtered: (Product & {relevance: number})[] = [];

    productsWithRelevance.forEach((p) => {
      if (filtered.length < perPage) {
        filtered.push(p);
      } else {
        let min = filtered.reduce((prev, current) => {
          return prev.relevance < current.relevance ? prev : current;
        });

        if (p.relevance > min.relevance) {
          const index = filtered.findIndex((p) => p.id === min.id);
          filtered.splice(index, 1, p);
        }
      }
    });

    return filtered;
  };

  const handleClick = (perPage: number) => {
    const activeProducts = getActiveProducts(products);

    setSelectedProducts(filterByWeight(activeProducts, perPage));
  };

  useEffect(() => {
    const activeProducts = getActiveProducts(products);
    setSelectedProducts(filterByWeight(activeProducts, 5));
  }, []);

  return (
    <div className="w-8/12 mx-auto pt-12">
      <Toolbar onClick={handleClick} />

      <Products products={selectedProducts} />
    </div>
  );
};

export default Shop;
