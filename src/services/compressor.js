import { API_BASE_URL } from '@/constants';

/**
 * This function gets the current compressors for a client.
 * @param {string} clientName - It receives the client name as a string.
 */

export default async function getClientCompressors(clientName) {
  try {
    const res = await fetch(
      `${API_BASE_URL}?type=getCompressors&clientName=${clientName}`
    );
    if (!res.ok) {
      throw new Error('Failed network response');
    }
    const data = await res.json();
    return data.compressors;
  } catch (e) {
    console.error('An error has occured: ', e);
    throw e;
  }
}
