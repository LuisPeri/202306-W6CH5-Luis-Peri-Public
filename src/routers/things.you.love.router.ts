import { Router as createRouter } from 'express';
import { ThingsYouLoveController } from '../controllers/things.you.love.controller.js';
import { Things } from '../entities/things.js';
import { ThingsYouLoveRepo } from '../repository/things.you.love.repository.js';
import { Repo } from '../repository/repo.js';
import createDebug from 'debug';

const debug = createDebug('W6:SampleRouter');
debug('Executed');

const repo: Repo<Things> = new ThingsYouLoveRepo();
const controller = new ThingsYouLoveController(repo);
export const thingsYouLoveRouter = createRouter();

thingsYouLoveRouter.get('/', controller.getAll.bind(controller));
thingsYouLoveRouter.get('/:id', controller.getById.bind(controller));
thingsYouLoveRouter.post('/', controller.post.bind(controller));
thingsYouLoveRouter.patch('/:id', controller.patch.bind(controller));
thingsYouLoveRouter.delete('/:id', controller.deleteById.bind(controller));
