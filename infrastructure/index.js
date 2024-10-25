const { createClient } = require('redis');
const { Pool } = require('pg')

class CheckInfrastructure {

  checkRedis = async () => {
      const redisClient = createClient({
        url: process.env.URL_REDIS
      })

      try {
        await redisClient.connect();
        await redisClient.ping();        
        return {
          status : true,
          health : "UP"
        }
      } catch (error) {
        console.error('Redis connection error:', error);
        return {
          status : false,
          health : "DOWN"
        }
      } finally {
        await redisClient.disconnect();
      }
  }

  checkPostgres = async() => {
    const pgConnection = new Pool({
<<<<<<< HEAD
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT

=======
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
>>>>>>> 217ee5c (Adicionando arquivo .env)
    });
    console.log(process.env.POSTGRES_PASSWORD);
    
    try {
      await pgConnection.query('SELECT NOW()');
      return {
        status : true,
        health : "UP"
      }
    } catch (error) {
      console.error('PostgreSQL connection error:', error);
      return {
        status : false,
        health : "DOWN"
      }
    } finally{
      await pgConnection.end();
    }
  }
}

module.exports = CheckInfrastructure;
