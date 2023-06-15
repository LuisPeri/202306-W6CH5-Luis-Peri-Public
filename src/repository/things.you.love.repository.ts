import fs from 'fs/promises';
import createDebug from 'debug';
import { Repo } from './repo.js';
import { HttpError } from '../types/http.error.js';
import { Things } from '../entities/things.js';
const debug = createDebug('W6:SampleRepo');

const file = './data.json';
const createID = (): Things['id'] =>
  Math.trunc(Math.random() * 1_000_000).toString();

export class ThingsYouLoveRepo implements Partial<Repo<Things>> {
  constructor() {
    debug('things that you love Repo');
  }

  async query(): Promise<Things[]> {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const aData = JSON.parse(stringData) as Things[];
    return aData;
  }

  async queryById(id: string) {
    const aData = await this.query();
    const result = aData.find((item) => item.id === id);
    if (!result) throw new HttpError(404, 'Not Found', 'Bad ID for the query');
    return result;
  }

  async create(data: Omit<Things, 'id'>) {
    const aData = await this.query();
    const newThingYouLove: Things = { ...data, id: createID() };
    const result = JSON.stringify([...aData, newThingYouLove]);
    await fs.writeFile(file, result, { encoding: 'utf8' });
    return newThingYouLove;
  }

  async delete(id: string) {
    const aData = await this.query();
    const result = aData.filter((item) => item.id !== id);
    if (aData.length === result.length)
      throw new HttpError(404, 'Not found', 'Bad ID for delete');
    await fs.writeFile(file, JSON.stringify(result), { encoding: 'utf8' });
  }

  async update(id: string, data: Partial<Things>) {
    const aData = await this.query();
    let newThing: Things = {} as Things;
    const result = aData.map((item) => {
      if (item.id === id) {
        newThing = { ...item, ...data };
        return newThing;
      }

      return item;
    });
    if (!newThing!.id)
      throw new HttpError(404, 'Not found', 'Bad id for update');
    await fs.writeFile(file, JSON.stringify(result), { encoding: 'utf8' });
    return newThing;
  }
}
