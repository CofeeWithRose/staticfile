import Koa from 'koa'
import KoaStatic from 'koa-static'
import path from 'path'

const app = new Koa()
const root = path.resolve('static')
console.log(__dirname, root)
app.use(KoaStatic(root))
app.listen(3000, ()=> {
    console.log(`server start`)
})