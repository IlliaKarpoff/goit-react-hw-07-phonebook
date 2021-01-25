import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

export const addContact = async contact => {
  const postData = await axios.post('/contacts', contact);

  return postData;
};