const { PeerServer } = require("peer");
PeerServer({ port: process.env.PORT, corsOptions: { origin: [process.env.CORS], maxAge: 600 } });
