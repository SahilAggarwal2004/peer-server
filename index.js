const { PeerServer } = require("peer");

const { CORS, PORT } = process.env;

PeerServer({
  corsOptions: { origin: [CORS], maxAge: 600 },
  port: PORT,
});
