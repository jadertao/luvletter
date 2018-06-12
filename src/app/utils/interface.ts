export interface Luvletter {
  id?: number;
  user: string;
  nickname: string;
  timestamp: number;
  content: string;
  mood: string;
  avatar: string;
  topic: Array<string>;
}

export interface Account {
  account: string | number;
  password: string | number;
}
