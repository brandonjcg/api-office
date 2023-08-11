import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import routes from './api/routes';
import dbInit from './database/init';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.disable('x-powered-by');

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello world from API server!',
    error: false,
  });
});

const PORT = process.env.PORT ?? 8000;

app.use('/api/v1', routes);

dbInit();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
