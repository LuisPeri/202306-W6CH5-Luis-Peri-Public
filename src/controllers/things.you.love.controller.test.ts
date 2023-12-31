// T import { NextFunction, Request, Response } from 'express';
// import { ThingsYouLoveRepo } from '../repository/things.you.love.repository';
// import { ThingsYouLoveController } from './things.you.love.controller';
//
// describe('Given ThigsYouLoveController class', () => {
//   const mockRepo: ThingsYouLoveRepo = {
//     query: jest.fn(),
//     queryById: jest.fn(),
//     create: jest.fn(),
//     update: jest.fn(),
//     delete: jest.fn(),
//     search: jest.fn(),
//   };
//   const req = {
//     params: { id: 1 },
//   } as unknown as Request;
//   const res = {
//     send: jest.fn(),
//   } as unknown as Response;
//   const next = jest.fn() as NextFunction;
//   const controller = new ThingsYouLoveController(mockRepo);
//   describe('When it is instantiated', () => {
//     test('Then method getAll should be used', async () => {
//       await controller.getAll(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       expect(mockRepo.query).toHaveBeenCalled();
//     });
//
//     test('Then method getByID should be used', async () => {
//       await controller.getById(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       expect(mockRepo.queryById).toHaveBeenCalled();
//     });
//
//     test('Then method patch should be used', async () => {
//       await controller.patch(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       expect(mockRepo.update).toHaveBeenCalled();
//     });
//
//     test('Then method create should be used', async () => {
//       await controller.post(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       expect(mockRepo.create).toHaveBeenCalled();
//     });
//
//     test('Then method delete should be used', async () => {
//       await controller.deleteById(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       expect(mockRepo.delete).toHaveBeenCalled();
//     });
//   });
// });
//
