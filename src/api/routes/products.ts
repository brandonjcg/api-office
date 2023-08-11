import { Request, Response, Router } from 'express';
import * as productController from '../controllers/product';
import { CreateProductDTO, UpdateProductDTO } from '../dto/product.dto';

const productsRouter = Router();

productsRouter.get('/:productCode', async (req: Request, res: Response) => {
  const { productCode } = req.params;
  const result = await productController.getById(productCode);
  return res.status(200).send(result);
});

productsRouter.delete('/:productCode', async (req: Request, res: Response) => {
  const { productCode } = req.params;
  const result = await productController.deleteById(productCode);
  return res.status(204).send({
    message: 'Product deleted',
    success: result,
  });
});

productsRouter.put('/:productCode', async (req: Request, res: Response) => {
  const { productCode } = req.params;
  const payload: UpdateProductDTO = req.body;

  const result = await productController.update(productCode, payload);
  return res.status(200).send(result);
});

productsRouter.post('/', async (req: Request, res: Response) => {
  const payload: CreateProductDTO = req.body;
  const result = await productController.create(payload);
  return res.status(201).send(result);
});

productsRouter.get('/', async (req: Request, res: Response) => {
  const result = await productController.getAll();
  return res.status(200).send(result);
});

export default productsRouter;
