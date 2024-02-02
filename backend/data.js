const data = {
  products: [
    {
      //_id: '1', will be assined automaytically by mongodb
      name: 'Mkd Slim Shirt',
      slug: 'Mkd-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 10,
      countInStock: 10,
      brand: 'LcWakiki',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      //_id: '2',
      name: 'Albania Fit Shirt',
      slug: 'Albania-Fit-Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 25,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Pak Fit Shirt',
      slug: 'Pak-Fit-Shirt',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 15,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
