import axios from "axios";

export const requestHandler = async (method:string, data = null, url:string) => {
  try {
    let response;
    switch(method.toLowerCase()) {
      case 'get':
        response = await axios.get(url);
        break;
      case 'post':
        response = await axios.post(url, data);
        break;
      case 'put':
        response = await axios.put(url, data);
        break;
      case 'delete':
        response = await axios.delete(url);
        break;
      default:
        throw new Error('Unsupported HTTP method');
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

