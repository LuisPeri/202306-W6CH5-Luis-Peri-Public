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

  async getById(req: Request, res: Response) {
    res.send(await this.repo.getById(req.params.id));
  }

  async post(req: Request, res: Response) {
    res.send(await this.repo.post(req.body));
  }

  async deleteById(req: Request, res: Response) {
    await this.repo.deleteById(req.params.id);
    res.send('I dont love this anymore');
  }

  /*
  En proceso:
  patch(req: Request, res: Response) {
    res.send('Patch Sample!: ' + req.body.user);
  }
  */
}
