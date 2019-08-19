import express from 'express';
import config from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import '@babel/polyfill';
import bookRoutes from './server/routes/BookRoutes';

config.config();

const app = express();

// Parse incoming requests data
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/api/v1/books', bookRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to WayFarer App!',
}));

app.all('*', (req, res) => res.status(404).json({
  status: 404,
  error: 'Endpoint does not exist',
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;