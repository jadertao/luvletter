export interface Luvletter {
  id?: number;
  account: string;
  nickname: string;
  createTime: number;
  content: string;
  mood: string;
  tags: Array<string>;
}

export interface Account {
  account: string | number;
  password: string | number;
}
