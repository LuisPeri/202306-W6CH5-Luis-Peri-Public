import createDebug from 'debug';
import { Controller } from './controller.js';
import { Things } from '../entities/things.js';
import { Repo } from '../repository/repo.js';
const debug = createDebug('W6:SampleController');

export class ThingsYouLoveController extends Controller<Things> {
  // eslint-disable-next-line no-unused-vars
  constructor(protected repo: Repo<Things>) {
    super();
    debug('Instantiated');
  }
}
