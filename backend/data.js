import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Zineeddine',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Nike',
        logo: '/images/logoseller.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Ahmed',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
        name:'Galaxy S21 Ultra',
        category: 'Phones',
        image: '/images/galaxys21ultra.jpg',
        price: 950,
        countInStock: 10,
        brand: 'Samsung',
        rating: 5,
        numReviews: 50,
        description: 'high quality product',
    },
    {
        name:'Iphone 12 pro',
        category: 'Phones',
        image: '/images/iphon12pro.jpg',
        price: 1000,
        countInStock: 13,
        brand: 'Apple',
        rating: 5,
        numReviews: 50,
        description: 'high quality product',
    },
    {
        name:'Mi 11 Ultra',
        category: 'Phones',
        image: '/images/mi11ultra.jpg',
        price: 1100,
        countInStock: 0,
        brand: 'Xiaomi',
        rating: 4.9,
        numReviews: 20,
        description: 'high quality product',
    },
    {
        name:'Galaxy S21+',
        category: 'Phones',
        image: '/images/galaxys21plus.jpg',
        price: 1000,
        countInStock: 20,
        brand: 'Samsung',
        rating: 4.8,
        numReviews: 25,
        description: 'high quality product',
    },
    {
        name:'Mate 40 pro',
        category: 'Phones',
        image: '/images/mate40pro.jpg',
        price: 1500,
        countInStock: 10,
        brand: 'Huawei',
        rating: 5,
        numReviews: 50,
        description: 'high quality product',
    },
    {
        name:'Rog phone 5 pro',
        category: 'Phones',
        image: '/images/rogphone5pro.jpg',
        price: 1600,
        countInStock: 25,
        brand: 'Asus',
        rating: 5,
        numReviews: 75,
        description: 'high quality product',
    },
]
};
export default data;