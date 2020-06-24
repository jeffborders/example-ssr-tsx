import { Request, Response } from 'express';
import serverResponse from './serverResponse';

async function doRoute(req: Request, res: Response, componentName: string) {
    const module = await import(`../../client/pages/${componentName}`);
    const response = serverResponse(module, componentName);

    res.send(response);
}

export default doRoute;
