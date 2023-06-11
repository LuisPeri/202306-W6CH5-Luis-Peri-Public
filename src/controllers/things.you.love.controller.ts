import { Request, Response } from 'express';
import { ThingsYouLove } from '../repository/things.you.love.repository.js';
import createDebug from 'debug';
const debug = createDebug('W6:SampleController');

export class ThingsYouLoveController {
  repo: ThingsYouLove;
  constructor() {
    this.repo = new ThingsYouLove();
    debug('Instantiated SampleController');
    debug(this.repo);
  }

  async getAll(req: Request, res: Response) {
    res.send(await this.repo.readAll());
  }

  getById(req: Request, res: Response) {
    res.send('Hello number: ' + req.params.id);
  }

  post(req: Request, res: Response) {
    res.send('Post Sample!: ' + req.body.user);
  }

  patch(req: Request, res: Response) {
    res.send('Patch Sample!: ' + req.body.user);
  }

  deleteById(req: Request, res: Response) {
    res.send('Delete Sample!: ' + req.body.user);
  }
}
