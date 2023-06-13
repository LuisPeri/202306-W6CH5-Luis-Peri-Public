import { NextFunction, Request, Response } from 'express';
import { SauceRepo } from '../repository/sauce.mongo.repository';
import { SauceController } from './sauce.controller';

describe('Given SauceController class', () => {
  describe('When it is instantiated', () => {
    const mockRepo: SauceRepo = {
      query: jest.fn(),
      queryById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    const req = {
      params: { id: 1 },
    } as unknown as Request;
    const res = {
      send: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as NextFunction;
    const controller = new SauceController(mockRepo);
    test('then method getAll shoud be used', async () => {
      await controller.getAll(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockRepo.query).toHaveBeenCalled();
    });

    test('Then method getById should be used', async () => {
      await controller.getById(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockRepo.queryById).toHaveBeenCalled();
    });
  });
});
