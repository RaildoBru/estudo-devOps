const express = require('express');
require('dotenv').config()
const app = express();
const routers = require('./api');

// Definindo a porta
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', routers);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
