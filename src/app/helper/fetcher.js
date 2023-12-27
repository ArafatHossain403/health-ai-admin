import Cookies from "js-cookie";
import { cleanMultiSlash, cleanStartingSlash, getApiUrl } from "./functions";

export const callFetcher = async (endpoint, method, data, headers) => {
  const apiUrl = getApiUrl();
  
  endpoint = cleanMultiSlash(endpoint);
  endpoint = cleanStartingSlash(endpoint);

  const token = Cookies.get('token');
  
  const response = await fetch(`${apiUrl}/${endpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...headers,
    },
    body: data ? JSON.stringify(data) : undefined,
  });  
  const res_data = await response.json(); 
  
  if (res_data.error) {
    throw new Error(res_data.message);
  }

  return res_data;
}