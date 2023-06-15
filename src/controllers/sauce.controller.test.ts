import { NextFunction, Request, Response } from 'express';
import { SauceRepo } from '../repository/sauce.mongo.repository';
import { SauceController } from './sauce.controller';
import { UserRepo } from '../repository/user.mongo.repository';
describe('Given SauceController class', () => {
  describe('When it is instantiated and the methods are called', () => {
    const mockSauceRepo: SauceRepo = {
      query: jest.fn(),
      queryById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      search: jest.fn(),
    };

    const mockUserRepo: UserRepo = {
      query: jest.fn(),
      create: jest.fn(),
      search: jest.fn(),
      queryById: jest.fn(),
    };
    const req = {
      params: { id: 1 },
    } as unknown as Request;
    const res = {
      send: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as NextFunction;
    const controller = new SauceController(mockSauceRepo, mockUserRepo);
    test('then method getAll shoud be used', async () => {
      await controller.getAll(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockSauceRepo.query).toHaveBeenCalled();
    });

    test('Then method queryById should be used', async () => {
      await controller.getById(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockSauceRepo.queryById).toHaveBeenCalled();
    });

    test('Then method update should be used', async () => {
      await controller.patch(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockSauceRepo.update).toHaveBeenCalled();
    });

    test('Then method create should be used', async () => {
      await controller.post(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockSauceRepo.create).toHaveBeenCalled();
    });

    test('Then method delete should be used', async () => {
      await controller.deleteById(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockSauceRepo.delete).toHaveBeenCalled();
    });
  });
});
