const express = require('express');

const CheckInfrastructure  = require('../infrastructure/index.js');

const checkInfrastructure = new CheckInfrastructure()

const router = express.Router();

router.get('/', (req, res) => {
    res.send('teesste')
});

router.get('/status', async(req,res) => {
    const redis = await checkInfrastructure.checkRedis();
    const postgres = await checkInfrastructure.checkPostgres();
    console.log(redis);
    console.log(postgres)

    if(redis.status && postgres.status ){
        return res.status(200).json({ status: 'OK', services: { postgres: postgres.health, redis: redis.health } })
    }
    return res.status(500).json({ status: 'ERROR', services: { postgres: postgres.health, redis: redis.health } });
});

module.exports = router;