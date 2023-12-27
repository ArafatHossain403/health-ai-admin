import { cleanMultiSlash, cleanStartingSlash, getApiUrl } from "./functions";

export const callFetcher = async (endpoint, method, data, headers) => {
  const apiUrl = getApiUrl();
  
  endpoint = cleanMultiSlash(endpoint);
  endpoint = cleanStartingSlash(endpoint);
  
  const response = await fetch(`${apiUrl}/${endpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(data),
  });  
  return await response.json();   
}