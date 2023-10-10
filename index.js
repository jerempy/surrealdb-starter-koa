import Koa from 'koa';
import parser from 'koa-bodyparser';
import cors from '@koa/cors';
import router from './routers/router.js';
import { surrealInit } from './db/index.js';

const App = new Koa();
const host = process.env.SURREAL_HOST || 'http://127.0.0.1';
const port = process.env.SURREAL_PORT || 8001;
surrealInit();

App.use(parser())
    .use(cors())
    .use(router.routes())
    .listen(port, () => {
        console.log(`🚀 Server listening ${host}:${port}/ 🚀`);
    });
