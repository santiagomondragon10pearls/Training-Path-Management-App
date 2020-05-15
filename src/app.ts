//@ts-check
import express, { Application, Request, Response } from 'express';
import connectDB from './config/db';

const app: Application = express();

// Connect Database
connectDB();

// Body Parser
app.use(express.json());

//MONGO DB ROUTES
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/my-bag', require('./routes/api/bags'));
// app.use('/api/items', require('./routes/api/items'));
// app.use('/api/products', require('./routes/api/products'));
// app.use('/api/stores', require('./routes/api/stores'));

// SQL ROUTES

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
