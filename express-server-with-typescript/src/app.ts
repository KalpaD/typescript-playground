import express from 'express';
import {sayHello} from 'typescript-library-for-hw'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(sayHello());
});

app.listen(port);