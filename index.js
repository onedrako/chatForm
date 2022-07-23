const express = require('express')
const cors = require('cors')
// const passport = require('passport')
const { config } = require('./config/config')
const routerApi = require('./routes')

const app = express()
const port = config.port || 3000

app.use(express.json())

// const whitelist = [config.frontendUrl, config.localhost, 'https://thewintergallery.vercel.app/', 'https://thewintergallery-7t4c9vwbg-onedrako.vercel.app/']

app.use(cors({ origin: '*' }))

routerApi(app)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
