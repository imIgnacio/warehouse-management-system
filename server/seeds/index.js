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
        'Laborum magna amet ipsum laboris exercitation irure. Reprehenderit dolore laboris dolor ipsum duis in esse. Amet eu culpa laboris qui dolore sunt. Cupidatat consectetur consequat velit id pariatur ex. Fugiat excepteur ut excepteur et excepteur exercitation incididunt laborum cupidatat. Quis labore sunt consectetur reprehenderit dolor veniam exercitation in fugiat cupidatat commodo exercitation duis ipsum. Commodo amet aliquip deserunt nostrud qui Lorem magna consequat magna.',
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
      description:
        'Laborum magna amet ipsum laboris exercitation irure. Reprehenderit dolore laboris dolor ipsum duis in esse. Amet eu culpa laboris qui dolore sunt. Cupidatat consectetur consequat velit id pariatur ex. Fugiat excepteur ut excepteur et excepteur exercitation incididunt laborum cupidatat. Quis labore sunt consectetur reprehenderit dolor veniam exercitation in fugiat cupidatat commodo exercitation duis ipsum. Commodo amet aliquip deserunt nostrud qui Lorem magna consequat magna.',
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
      description:
        'Laborum magna amet ipsum laboris exercitation irure. Reprehenderit dolore laboris dolor ipsum duis in esse. Amet eu culpa laboris qui dolore sunt. Cupidatat consectetur consequat velit id pariatur ex. Fugiat excepteur ut excepteur et excepteur exercitation incididunt laborum cupidatat. Quis labore sunt consectetur reprehenderit dolor veniam exercitation in fugiat cupidatat commodo exercitation duis ipsum. Commodo amet aliquip deserunt nostrud qui Lorem magna consequat magna.',
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
      description:
        'Laborum magna amet ipsum laboris exercitation irure. Reprehenderit dolore laboris dolor ipsum duis in esse. Amet eu culpa laboris qui dolore sunt. Cupidatat consectetur consequat velit id pariatur ex. Fugiat excepteur ut excepteur et excepteur exercitation incididunt laborum cupidatat. Quis labore sunt consectetur reprehenderit dolor veniam exercitation in fugiat cupidatat commodo exercitation duis ipsum. Commodo amet aliquip deserunt nostrud qui Lorem magna consequat magna.',
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

  process.exit();
});
