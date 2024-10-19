import express, { Express, json, urlencoded, static as static_ } from 'express'
import { indexRouter } from './routes/routes.index'
import { morganNotes } from './config/config.morgan'
import { helmetHandler } from './config/config.helmet'
import { compressionHandler } from './config/config.compression'
import path from 'path'

const app: Express = express()

app.set('trust proxy', true)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(static_(path.join(__dirname, '..', 'public')))
app.use(helmetHandler())
app.use(
  json({
    type: ['application/json', 'application/csp-report', 'application/reports+json']
  })
)
app.use(urlencoded({ extended: false }))
app.use(morganNotes())
app.use(compressionHandler())
app.use(indexRouter())

app.set('port', 8080)
app.listen(app.get('port'))
