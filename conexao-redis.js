const express = require('express');
const { createClient } = require('redis');

const app = express();
const port = 3000;

// Criação do cliente Redis
const redisClient = createClient();

redisClient.on('error', (err) => {
  console.error('Erro ao conectar no Redis:', err);
});

redisClient.on('connect', () => {
  console.log('Conectado ao Redis!');
});

// Rota para testar a conexão com o Redis
app.get('/redis', async (req, res) => {
  try {
    await redisClient.connect();

    // Tentativa de set e get no Redis
    await redisClient.set('test_key', 'Redis funcionando!');
    const value = await redisClient.get('test_key');
    
    res.status(200).json({
      message: 'Conexão com Redis bem-sucedida!',
      redis_value: value
    });
    
    await redisClient.disconnect();
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao conectar ao Redis',
      error: error.toString()
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});