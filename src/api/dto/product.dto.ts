import { Optional } from 'sequelize';

export type CreateProductDTO = {
  productCode: string;
  productName: string;
  productLine: string;
  productScale: string;
  productVendor: string;
  productDescription: string;
  quantityInStock: number;
  buyPrice: number;
  MSRP: number;
};

export type UpdateProductDTO = Optional<CreateProductDTO, 'productCode'>;
