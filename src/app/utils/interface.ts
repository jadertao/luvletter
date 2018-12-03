export interface Luvletter {
  id?: number;
  account: string;
  nickname: string;
  createTime: string;
  content: string;
  mood: string;
  tags: Array<string>;
}

export interface Account {
  account: string | number;
  password: string | number;
}

export interface CustomError {
  error: string;
  message: string;
}

export interface PartialLetter {
  mood: string;
  content: string;
  tags: string[];
}

export interface AccountInfo {
  account: string;
  nickname: string;
  avatar: string;
  token: string;
}
