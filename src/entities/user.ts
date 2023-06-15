export type User = {
  id: string;
  userName: string;
  email: string;
  passwd: string;
};

export type UserLogin = {
  user: string; // Valido username|usermail
  passwd: string;
};
