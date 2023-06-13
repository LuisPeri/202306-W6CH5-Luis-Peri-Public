/* eslint-disable no-unused-vars */
import { SauceRepo } from '../repository/sauce.mongo.repository';
import { Controller } from './controller';
import { Sauce } from '../entities/sauce';
import createDebug from 'debug';

const debug = createDebug('W6:BookController');

export class SauceController extends Controller<Sauce> {
  constructor(protected repo: SauceRepo) {
    super();
    debug('instantiated');
  }
}
