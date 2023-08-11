import * as productDal from '../dal/product';
import { ProductInput, ProductOutput } from '../models/Products';

export const create = (payload: ProductInput): Promise<ProductOutput> => productDal.create(payload);

export const update = (
  productCode: string,
  payload: Partial<ProductInput>,
): Promise<ProductOutput> => productDal.update(productCode, payload);

export const deleteById = (
  productCode: string,
) : Promise<boolean> => productDal.deleteById(productCode);

export const getAll = () : Promise<ProductOutput[]> => productDal.getAll();

export const getById = (
  productCode: string,
) : Promise<ProductOutput> => productDal.getById(productCode);
