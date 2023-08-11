import Product from '../../../database/models/Products';
import * as service from '../../../database/services/productService';
import { CreateProductDTO, UpdateProductDTO } from '../../dto/product.dto';
import toProduct from './mapper';

export const create = async (
  payload: CreateProductDTO,
): Promise<Product> => {
  const createdProduct = await service.create(payload);
  return toProduct(createdProduct) as Product;
};

export const update = async (
  productCode: string,
  payload: UpdateProductDTO,
): Promise<Product> => {
  const updatedProduct = await service.update(productCode, payload);
  return toProduct(updatedProduct) as Product;
};

export const getById = async (
  productCode: string,
): Promise<Product> => toProduct(await service.getById(productCode)) as Product;

export const getAll = async (): Promise<Product[]> => (
  await service.getAll()
).map((product) => toProduct(product) as Product);

export const deleteById = async (
  productCode: string,
): Promise<boolean> => {
  const isDeleted = await service.deleteById(productCode);
  return isDeleted;
};
