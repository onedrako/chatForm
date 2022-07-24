const express = require('express')
const cors = require('cors')

const { config } = require('./config/config')
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = config.port || 3005

app.use(express.json())

const whitelist = [config.frontendUrl, config.localhost]

app.use(cors({ origin: whitelist }))

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
