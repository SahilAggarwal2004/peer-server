const { PeerServer } = require('peer');

const port = process.env.PORT || 10000
if (port === 10000) require('dotenv').config({ path: './.env' })

PeerServer({ port, corsOptions: { origin: [process.env.CORS], maxAge: 600 } })