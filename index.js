const { PeerServer } = require('peer');
PeerServer({ port: process.env.PORT || 5100, corsOptions: { origin: [process.env.CORS], maxAge: 600 } })