import { DataTypes, Model, Optional } from 'sequelize';
import { ProductAttributes } from '../../api/interfaces/product.interface';
import connection from '../config';

export interface ProductInput extends Optional<ProductAttributes, 'productCode'> {}
export interface ProductOutput extends Required<ProductAttributes> {}

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  public productCode!: string;

  public productName!: string;

  public productLine!: string;

  public productScale!: string;

  public productVendor!: string;

  public productDescription!: string;

  public quantityInStock!: number;

  public buyPrice!: number;

  public MSRP!: number;
}

Product.init({
  productCode: {
    type: DataTypes.STRING(15),
    allowNull: false,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  productLine: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  productScale: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  productVendor: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  productDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  quantityInStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  buyPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  MSRP: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  sequelize: connection,
  timestamps: false,
});

export default Product;
