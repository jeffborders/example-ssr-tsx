import express, { Express } from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app: Express = express();
const port: string = process.env.PORT || '3636';

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/dist', express.static('dist'))
  .use('/node_modules', express.static('node_modules'))
  .use('/', router)
  .listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

export default app;
