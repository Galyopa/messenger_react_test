import { client } from '../utils/fetchClient';

interface Answer {
  value: string,
}

export const getAnswer = () => {
  return client.get<Answer>('jokes/random');
};
