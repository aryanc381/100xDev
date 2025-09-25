import { Hono } from "hono";

const app = new Hono();

app.use(authMiddleware);

app.post('/', async (c) => {
  const body = await c.req.json(); // request the json object
  // logging the information
  console.log(body); 
  console.log(c.req.header('Authorization')); // I want to take a header as the req input and the name of the  header as `Authorization`.
  console.log(c.req.query('param')); // I want to take a query param named as `param`

  return c.text('Hello World!'); // returning the text
});

async function authMiddleware(c: any, next: any) {
  if(c.req.header('Authorization')) {
    await next()
  } else {
    return c.text('You dont have access!');
  }
}

export default app;