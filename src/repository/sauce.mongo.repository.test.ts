import { SauceModel } from './sauce.mongo.model';
import { SauceRepo } from './sauce.mongo.repository';

jest.mock('./sauce.mongo.model.js');

describe('Given a SauceRepo class', () => {
  const repo = new SauceRepo();
  describe('When it is instantiate and method query is called', () => {
    test('then query and exec shouldd be used', async () => {
      const exec = jest.fn().mockResolvedValue([]);
      SauceModel.find = jest.fn().mockReturnValueOnce({
        exec,
      });

      const result = await repo.query();
      expect(SauceModel.find).toHaveBeenCalled();
      expect(exec).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });
});