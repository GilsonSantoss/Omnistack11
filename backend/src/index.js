const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const port = 3333;
const app = express();

app.use(cors()); // Liberando para todas as aplicações acessarem o back-end ou podemos determina uma url especifica que pode acessar o recurso.
app.use(express.json());
app.use(routes);

app.listen(port);
