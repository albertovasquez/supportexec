const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const router = require('./router');

const app = new Koa();

app.use(router.routes());
app.use(serve(path.resolve('dist')))

// TODO move to middleware and 
// instead throw error
app.use(async (ctx, next) => {
    await next();

    ctx.body = {
        error: 'Not found',
    };
    ctx.status = 404;
});

module.exports = app;