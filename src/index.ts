import express, { Request, Response } from 'express';
// import 'reflect-metadata';
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello world!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
