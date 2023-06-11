import { Router as createRouter } from 'express';
import { ThingsYouLoveController } from '../controllers/things.you.love.controller.js';

const controller = new ThingsYouLoveController();
export const thingsYouLoveRouter = createRouter();

thingsYouLoveRouter.get('/', controller.getAll.bind(controller));
thingsYouLoveRouter.get('/:id', controller.getById.bind(controller));
thingsYouLoveRouter.post('/', controller.post.bind(controller));
thingsYouLoveRouter.patch('/:id', controller.patch.bind(controller));
thingsYouLoveRouter.delete('/:id', controller.deleteById.bind(controller));
