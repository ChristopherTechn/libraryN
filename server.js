const express = require('express');
const cors = require('cors');
require('dotenv').config();

const router = require('./routers/router');



const app = express();
app.use(cors());
app.use(express.json());

app.get('/boo', (req, res) => {
  res.send('bomboo');
});

console.log(process.env.DB_NAME);

app.use('/', router);

const port = 5000;
app.listen(port, () => console.log(`Server is listening at port ${port}`));

