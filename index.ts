require('dotenv').config();
import express from 'express';
import { connectDB } from './config/database';
import routes from './routes';
import middlewares from './middlewares';

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());

app.use(middlewares.error);
app.use(middlewares.logger);

app.get('/', middlewares.validateToken ,(req, res) => res.send('Express + TypeScript Server'));

app.use('/admin', routes.AdminRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
