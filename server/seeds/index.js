const db = require('../config/connection');
const { Category, Product } = require('../models/');

db.once('open', async () => {
  await Category.deleteMany();
  const categories = await Category.insertMany([
    {
      name: 'Arenas Sanitarias',
      products: [],
    },
    {
      name: 'Comidas Gatos',
      products: [],
    },
    {
      name: 'Accesorios Gatos',
      products: [],
    },
  ]);
  console.log('Categories Created');

  await Product.deleteMany();
  const products = await Product.insertMany([
    {
      name: 'Zootec 20Kg',
      description:
        'Mollit enim sit voluptate cupidatat occaecat proident ipsum voluptate qui sunt.',
      stock: 150,
      buyPrice: 7990,
      sellPrice: 15990,
      historicalPrice: [
        {
          date: new Date(2021, 10, 25),
          price: 5990,
        },
        {
          date: new Date(2022, 1, 20),
          price: 6990,
        },
        {
          date: new Date(2022, 5, 15),
          price: 7990,
        },
      ],
      category: categories[0]._id,
    },
    {
      name: 'Magnum 20Kg',
      description: 'Non ipsum non quis exercitation minim eu.',
      stock: 100,
      buyPrice: 7990,
      sellPrice: 15990,
      historicalPrice: [
        {
          date: new Date(2021, 10, 25),
          price: 5990,
        },
        {
          date: new Date(2022, 1, 20),
          price: 6990,
        },
        {
          date: new Date(2022, 5, 15),
          price: 7990,
        },
      ],
      category: categories[0]._id,
    },
    {
      name: 'Pet Matte 16Kg',
      description: 'Ullamco do nulla incididunt do nisi aute nisi culpa.',
      stock: 100,
      buyPrice: 9990,
      sellPrice: 18990,
      historicalPrice: [
        {
          date: new Date(2021, 10, 25),
          price: 5990,
        },
        {
          date: new Date(2022, 1, 20),
          price: 6990,
        },
        {
          date: new Date(2022, 5, 15),
          price: 7990,
        },
      ],
      category: categories[0]._id,
    },
    {
      name: 'Safari 20Kg',
      description: 'Tempor quis exercitation incididunt et.',
      stock: 100,
      buyPrice: 10990,
      sellPrice: 23990,
      historicalPrice: [
        {
          date: new Date(2021, 10, 25),
          price: 5990,
        },
        {
          date: new Date(2022, 1, 20),
          price: 6990,
        },
        {
          date: new Date(2022, 5, 15),
          price: 7990,
        },
      ],
      category: categories[0]._id,
    },
  ]);
  console.log('Products Created');

  await Category.findOneAndUpdate(
    { name: 'Arenas Sanitarias' },
    { products: [...products] }
  );
  console.log('Categories and Products linked');

  process.exit();
});
