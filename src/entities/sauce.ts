import { User } from './user';

export type Sauce = {
  id: string;
  title: string;
  bought: boolean;
  owner: User;
};
