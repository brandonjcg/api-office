import Product, { ProductInput, ProductOutput } from '../models/Products';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  const product = await Product.create(payload);
  return product;
};

const productNotFound: string = 'Product not found';

export const update = async (
  productCode: string,
  payload: Partial<ProductInput>,
): Promise<ProductOutput> => {
  const product = await Product.findByPk(productCode);
  if (!product) throw new Error(productNotFound);

  const updatedProduct = await (product as Product).update(payload);
  return updatedProduct;
};

export const getById = async (productCode: string): Promise<ProductOutput> => {
  const product = await Product.findByPk(productCode);
  if (!product) throw new Error(productNotFound);

  return product;
};

export const deleteById = async (productCode: string): Promise<boolean> => {
  const product = await Product.findByPk(productCode);
  if (!product) throw new Error(productNotFound);

  const isProductDeleted = await Product.destroy({
    where: { productCode },
  });
  return !!isProductDeleted;
};

export const getAll = async (): Promise<ProductOutput[]> => Product.findAll();
