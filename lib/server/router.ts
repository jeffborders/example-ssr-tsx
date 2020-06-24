import express, { Router } from 'express';
import serverResponse from './utils/serverResponse';
import doRoute from './utils/doRoute';
import capitalizeFirstLetter from './utils/capitalizeFirstLetter';

const router: Router = express.Router();

router
  .get('/', async (req, res) => doRoute(req, res, 'Home'))
  .get('/:pageName', async (req, res) => {
    try {
      const componentName: string = capitalizeFirstLetter(req.params.pageName);
      console.info(componentName);
      const module = await import(`../client/pages/${componentName}`);
      const response = serverResponse(module, componentName);

      res.send(response);
    } catch(err) {
      console.info(err);
      doRoute(req, res, 'NotFound');
    }
  })

export default router;
