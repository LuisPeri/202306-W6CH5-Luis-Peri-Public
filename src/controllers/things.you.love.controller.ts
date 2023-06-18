import createDebug from 'debug';
import { Controller } from './controller.js';
import { Things } from '../entities/things.js';
import { Repo } from '../repository/repo.js';
const debug = createDebug('W6:LoverController');

export class ThingsYouLoveController extends Controller<Things> {
  // eslint-disable-next-line no-unused-vars
  constructor(protected repo: Repo<Things>) {
    super();
    debug('Sucking dicks hard');
  }
}
