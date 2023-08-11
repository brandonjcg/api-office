import Product from './models/Products';

const dbInit = () => {
  Product.sync({ alter: false });
};

export default dbInit;
