/**メモ
 * カード操作(CRUD)は認証されているユーザーのみ可能になるので、
 * Bearerトークンを与えてHTTPリクエストを送る
 */
import axios from 'axios';

const API_URI = 'api/cards/';

const cardService = {
  createCard: async (cardData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URI, cardData, config);
    return response.data;
  },

  getCards: async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URI, config);
    return response.data;
  },
  deleteCard: async (id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(API_URI + id, config);
    return response.data;
  },
  updateCard: async (cardData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(API_URI + cardData._id, cardData, config);
    return response.data;
  },
};

export default cardService;
