import { User } from './user.js';

export type Sauce = {
  id: string;
  title: string;
  bought: boolean;
  owner: User;
};
