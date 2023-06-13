import { Router as createRouter } from 'express';
import { SauceController } from '../controllers/sauce.controller.js';
import { SauceRepo } from '../repository/sauce.mongo.repository.js';
import { Repo } from '../repository/repo.js';
import { Sauce } from '../entities/sauce.js';

import createDebug from 'debug';
const debug = createDebug('W6:BookRouter');

debug('Executed');

const repo: Repo<Sauce> = new SauceRepo();
const controller = new SauceController(repo);
export const sauceRouter = createRouter();

sauceRouter.get('/', controller.getAll.bind(controller));
sauceRouter.get('/:id', controller.getById.bind(controller));
sauceRouter.post('/', controller.post.bind(controller));
sauceRouter.patch('/:id', controller.patch.bind(controller));
sauceRouter.delete('/:id', controller.deleteById.bind(controller));
