import { DATA_API_URL } from './constants';

export const getData = async () => {
  const res = await fetch(`${DATA_API_URL}/ingredients`);

  if (res.ok) {
    return await res.json()
  }
  throw new Error(`Error: ${res.status}`);
};
