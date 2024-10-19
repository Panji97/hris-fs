import { Request, Response, Router } from 'express'

const indexRouter = () => {
  const router = Router()

  router.get('/', (req: Request, res: Response) => {
    // return res.json({ status: true, date: new Date(), result: 'REST API EMR (Legacy)' })
    return res.render('index')
  })

  return router
}

export { indexRouter }
