const { PeerServer } = require("peer");

const { CORS, PORT } = process.env;

PeerServer({
  corsOptions: { origin: "*", maxAge: 600 },
  port: PORT,
});
