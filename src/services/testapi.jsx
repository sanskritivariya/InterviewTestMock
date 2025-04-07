import axios from 'axios';




const BASE_URL="https://jsonplaceholder.typicode.com/"

export const apiGet = async (endpoint) => {
  console.log("endpoint",endpoint);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`);
      return response;
    } catch (error) {
      console.error('GET error:', error);
      throw error;
    }
  };