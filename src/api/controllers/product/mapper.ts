import { ProductOutput } from '../../../database/models/Products';
import { ProductAttributes } from '../../interfaces/product.interface';

const toProduct = (product: ProductOutput): ProductAttributes => ({
  productCode: product.productCode,
  productName: product.productName,
  productLine: product.productLine,
  productScale: product.productScale,
  productVendor: product.productVendor,
  productDescription: product.productDescription,
  quantityInStock: product.quantityInStock,
  buyPrice: product.buyPrice,
  MSRP: product.MSRP,
});

export default toProduct;
