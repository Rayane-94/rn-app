const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const contractrouter = require('./routers/contractRouter.js')

const app = express();

const mongoURI = process.env.MONGO_DB_URI;
console.log(mongoURI)

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(express.json());

app.use(contractrouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));