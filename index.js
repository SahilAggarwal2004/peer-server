const { PeerServer } = require('peer');

const port = process.env.PORT || 5100
if (port === 5100) require('dotenv').config({ path: './.env' })

PeerServer({ port, corsOptions: { origin: [process.env.CORS], maxAge: 600 } })