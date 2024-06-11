import { API_BASE_URL } from '@/constants';

/**
 * This function gets all the current engineers.
 */

export const fetchEngineers = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}?type=getEngineers`);
    if (!res.ok) {
      throw new Error('Failed network response');
    }
    const data = await res.json();
    return data.engineers;
  } catch (e) {
    console.error('Fetch error: ', e);
    throw e;
  }
};