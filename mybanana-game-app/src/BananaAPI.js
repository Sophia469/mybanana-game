//BananaAPI.js
import axios from 'axios';

const BASE_URL = 'https://marcconrad.com/uob/banana/api.php';

export const getBananaData = async (format = 'json', base64 = 'no') => {
  try {
    const response = await axios.get(`${BASE_URL}?out=${format}&base64=${base64}`);
    if (response.headers['content-type'].includes('application/json')) {
      return response.data;
    } else {
      throw new Error('API did not return JSON data');
    }
  } catch (error) {
    console.error('Error fetching Banana data:', error);
    return null;
  }
};
