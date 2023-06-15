import { SauceModel } from './sauce.mongo.model.js';
import createDebug from 'debug';
import { Sauce } from '../entities/sauce.js';
import { Repo } from './repo.js';
import { HttpError } from '../types/http.error.js';
const debug = createDebug('W6:BookRepo');

export class SauceRepo implements Partial<Repo<Sauce>> {
  constructor() {
    debug('Instantiated');
  }

  async query(): Promise<Sauce[]> {
    const aData = await SauceModel.find().exec();
    return aData;
  }

  async queryById(id: string): Promise<Sauce> {
    const result = await SauceModel.findById(id).exec();
    if (result === null)
      throw new HttpError(404, 'Not found', 'Bad id for the query');
    return result;
  }

  async search({
    key,
    value,
  }: {
    key: string;
    value: unknown;
  }): Promise<Sauce[]> {
    const result = await SauceModel.find({ [key]: value }).exec();
    return result;
  }

  async create(data: Omit<Sauce, 'id'>): Promise<Sauce> {
    const newBook = await SauceModel.create(data);
    return newBook;
  }

  async update(id: string, data: Partial<Sauce>): Promise<Sauce> {
    const newBook = await SauceModel.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    if (newBook === null)
      throw new HttpError(404, 'Not found', 'Bad id for the update');
    return newBook;
  }

  async delete(id: string): Promise<void> {
    const result = await SauceModel.findByIdAndDelete(id).exec();
    if (result === null)
      throw new HttpError(404, 'Not found', 'Bad id for the delete');
  }
}
