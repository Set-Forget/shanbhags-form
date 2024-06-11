import { API_BASE_URL } from "@/constants"

/**
 * This function gets the current clients for an engineer.
 * @param {string} engineerName - It receives the engineer name as a string.
 */

export async function getEngineerClients(engineerName) {
  try {
    const res = await fetch(`${API_BASE_URL}?type=getClients&engineerName=${engineerName}`)
    if (!res.ok) {
        throw new Error('Failed network response');
    }
    const data = await res.json()
    return data.clients
  } catch (e) {
    console.error('An error has occured: ', e)
    throw e;
  }
}
