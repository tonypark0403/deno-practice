import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getNotes } from "./routes.ts";

const router = new Router();

router
    .get('/', (ctx) => {
        ctx.response.body = 'Welcome to notes API';
    })
    .get('/notes', getNotes)
// .get('/notes/:id', getSingleNote)
// .post('/notes', createNote)
// .put('/notes/:id', updateNote)
// .delete('/notes/:id', deletNote);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: 9000 });
console.log('Server is up and running');