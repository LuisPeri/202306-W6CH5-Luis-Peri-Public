import { ThingsYouLoveRepo } from '../repository/things.you.love.repository.js';
import createDebug from 'debug';
import { Controller } from './controller.js';
import { Things } from '../entities/things.js';
const debug = createDebug('W6:SampleController');

export class ThingsYouLoveController extends Controller<Things> {
  // eslint-disable-next-line no-unused-vars
  constructor(protected repo: ThingsYouLoveRepo) {
    debug('Instantiated SampleController');
    super();
    debug('Instantiated');
  }
}
debug('Instantiated');
