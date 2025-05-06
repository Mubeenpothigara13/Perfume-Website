// src/data/allProducts.js
const allProducts = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `Perfume ${i + 1}`,
  price: (Math.random() * 50 + 30).toFixed(2),
  // now loops 1,2,3,4,1,2,...
  image: `/img/p${(i % 4) + 1}.jpg`,
  // array has 4 entries, so use i % 4
  category: ['Floral', 'Fresh', 'Sweet', 'Woody'][i % 4],
  rating: (Math.random() * 2 + 2).toFixed(1),
  notes: ['Note1', 'Note2', 'Note3'],
}));

export default allProducts;
