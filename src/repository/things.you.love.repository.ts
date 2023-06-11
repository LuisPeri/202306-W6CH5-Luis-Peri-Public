import fs from 'fs/promises';
import createDebug from 'debug';
const debug = createDebug('W6:SampleRepo');

type Things = {
  id: string;
  love: string;
};

const file = './data.json';

export class ThingsYouLove {
  constructor() {
    debug('things that you Repo');
  }

  async readAll() {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    return JSON.parse(stringData) as Things[];
  }

  async getById(id: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const idData = JSON.parse(stringData) as Things[];
    return idData.find((things) => things.id === id);
  }

  async post() {}

  async patch() {}

  async deleteById() {}
}
