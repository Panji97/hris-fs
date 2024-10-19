import express, { Express, json, urlencoded, static as static_ } from 'express'
import { pgClient } from './config/config.database'
import { PORT } from './uhuuy.json'
import { indexRouter } from './routes/routes.index'
import { morganNotes } from './config/config.morgan'
import { errorHandler } from './exception/exception.global'
import { helmetHandler } from './config/config.helmet'
import { compressionHandler } from './config/config.compression'
import corsHandler from './config/config.cors'
import path from 'path'

const app: Express = express()

pgClient.connect()

app.set('trust proxy', true)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(static_(path.join(__dirname, '..', 'public')))
app.use(helmetHandler())
app.use(corsHandler())
app.use(
  json({
    type: ['application/json', 'application/csp-report', 'application/reports+json']
  })
)
app.use(urlencoded({ extended: false }))
app.use(morganNotes())
app.use(compressionHandler())
app.use(indexRouter())
app.use(errorHandler())

app.set('port', PORT)
app.listen(app.get('port'))
