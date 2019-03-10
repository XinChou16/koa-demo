const Koa = require('koa')
const KoaRouter = require('koa-router')
const json = require('koa-json')
const path = require('path')
const render = require('koa-ejs')

const app = new Koa()
const router = new KoaRouter()

// json prettier middleware
app.use(json())

// Simple Middleware example
// app.use(async ctx => ctx.body = {
//   msg: 'Hello World'
// })

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false, 
  debug: false
})

// index
router.get('/', async ctx => {
  await ctx.render('index', {
    title: 'Things I love'
  })
})

router.get('/test', ctx => (ctx.body = 'hello'))

// Router Middleware
app.use(router.routes()).use(router.allowedMethods())

app.listen(9999, () => {
  console.log('Server start')
})

