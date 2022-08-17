import { client } from '../utils/fetchClient';

interface Answer {
  icon_url: string,
  id: string,
  url: string,
  value: string,
}

export const getAnswer = () => {
  return client.get<Answer>('jokes/random');
};
