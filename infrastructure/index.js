const { createClient } = require('redis');
const redisClient = createClient();
const { Pool } = require('pg')

class CheckInfrastructure {

  checkRedis = async () => {

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
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
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
