import axios from 'axios';

// ENDPOINT
//TODO: use proxy
const API_URI = '/api/users/';

const authService = {
  register: async (userFormData) => {
    const response = await axios.post(API_URI, userFormData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },

  login: async (userFormData) => {
    const response = await axios.post(API_URI + 'login', userFormData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('user');
  },
};

export default authService;
