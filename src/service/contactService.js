import axios from "axios";

const API_URL = "http://localhost:5000";

export const getContacts = () => {
  return axios.get(`${API_URL}/api/contact/getContacts`);
};
export const createContact = (contact) => {
  return axios.post(`${API_URL}/api/contact/create`);
};
export const getContact = (id) => {
  return axios.get(`${API_URL}/api/contact/${id}`);
};

export const updateContact = (id, contact) => {
  return axios.put(`${API_URL}/api/contact/update/${id}`, contact);
};

export const deleteContact = (id) => {
  return axios.get(`${API_URL}/api/contact/delete/${id}`);
};
