const express = require('express');
const Redis = require('ioredis');
const app = express();
const redis = new Redis({ host: process.env.REDIS_HOST || 'redis', port: process.env.REDIS_PORT || 6379 });

app.get('/', async (req, res) => {
  let visits = await redis.incr('visits');
  res.send(`Hello from Node.js Express! Visit count: ${visits}`);
});

const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
