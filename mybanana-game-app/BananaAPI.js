const axios = require('axios');

const BASE_URL = 'http://marcconrad.com/uob/banana/api.php';

const getBananaData = async (format = 'json', base64 = 'no') => {
  try {
    const response = await axios.get(`${BASE_URL}?out=${format}&base64=${base64}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Banana data:', error);
    return null;
  }
};

module.exports = { getBananaData };
