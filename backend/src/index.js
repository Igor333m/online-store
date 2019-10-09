require('dotenv').config({ path: 'variables.env' });
const createServer = require('createServer');
const db = require('./db');

const server = createServer();

// TODO Use Express middleware to handle cookies (JWT)
// TODO Use Express middleware to populate current user

server.start(
  {
    // This endpoint should be only visited from aproved URLs 
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);