import api from './src/api';

const getBananaData = async (format = 'json', base64 = 'no') => {
  try {
    const response = await api.get(``, {
      params: {
        out: format,
        base64: base64
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Banana data:', error);
    return null;
  }
};

export { getBananaData };
