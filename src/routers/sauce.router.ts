import { Router as createRouter } from 'express';
import { SauceController } from '../controllers/sauce.controller.js';
import { SauceRepo } from '../repository/sauce.mongo.repository.js';
import { Repo } from '../repository/repo.js';
import { Sauce } from '../entities/sauce.js';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';
import createDebug from 'debug';
import { UserRepo } from '../repository/user.mongo.repository.js';
const debug = createDebug('W6:BookRouter');

debug('Executed');
const userRepo = new UserRepo
const repo: Repo<Sauce> = new SauceRepo();
const controller = new SauceController(repo: SauceRepo, userRepo: UserRepo) as SauceController;
const auth = new AuthInterceptor();
export const sauceRouter = createRouter();

sauceRouter.get('/', controller.getAll.bind(controller));
sauceRouter.get('/:id', controller.getById.bind(controller));
sauceRouter.post('/', controller.post.bind(controller));
sauceRouter.patch(
  '/:id',
  auth.logged.bind(auth),
  controller.patch.bind(controller)
);
sauceRouter.delete(
  '/:id',
  auth.logged.bind(auth),
  controller.deleteById.bind(controller)
);
