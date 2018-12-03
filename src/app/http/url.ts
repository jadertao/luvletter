import { environment } from '../../environments/environment';

const { prefix } = environment;
export const LOGIN = `${prefix}/login`;
export const LENGTH_OF_PAGES = `${prefix}/letters/length`;
export const ALL_LETTERS = `${prefix}/letters`;
export const TAGS = `${prefix}/tags`;
export const MOODS = `${prefix}/moods`;
export const AVATAR = (account: string) => `${prefix}/accounts/${account}/avatar`;
