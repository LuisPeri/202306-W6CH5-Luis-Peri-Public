import { Router as createRouter } from 'express';
import { SauceController } from '../controllers/sauce.controller.js';
import { SauceRepo } from '../repository/sauce.mongo.repository.js';
import { Repo } from '../repository/repo.js';
import { Sauce } from '../entities/sauce.js';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';
import createDebug from 'debug';
import { UserRepo } from '../repository/user.mongo.repository.js';
import { User } from '../entities/user.js';
const debug = createDebug('W6:BookRouter');

debug('Executed');

const repo: Repo<Sauce> = new SauceRepo() as Repo<Sauce>;
const repo2: Repo<User> = new UserRepo() as Repo<User>;
const controller = new SauceController(repo, repo2);
const auth = new AuthInterceptor(repo);
export const sauceRouter = createRouter();

sauceRouter.get('/', controller.getAll.bind(controller));
sauceRouter.get('/:id', controller.getById.bind(controller));
sauceRouter.post('/', controller.post.bind(controller));
sauceRouter.patch(
  '/:id',
  auth.logged.bind(auth),
  auth.authorized.bind(auth),
  controller.patch.bind(controller)
);
sauceRouter.delete(
  '/:id',
  auth.logged.bind(auth),
  auth.authorized.bind(auth),
  controller.deleteById.bind(controller)
);
