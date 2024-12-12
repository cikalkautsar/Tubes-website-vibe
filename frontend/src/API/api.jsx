import axios from 'axios';

// Membuat instance axios untuk API backend
const API = axios.create({
  baseURL: 'http://localhost:8000/',
});

// Mengambil data users dari backend
export const fetchUsers = async () => {
  try {
    const response = await API.get('/users/');
    return response.data;  // Mengembalikan data users
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data users:', error);
    throw error; // Bisa lemparkan error untuk ditangani lebih lanjut di komponen
  }
};

// Mengambil data posts dari backend
export const fetchPosts = async () => {
  try {
    const response = await API.get('/posts/');
    return response.data;  // Mengembalikan data posts
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data posts:', error);
    throw error; // Bisa lemparkan error untuk ditangani lebih lanjut di komponen
  }
};

// API untuk Sign Up (registrasi pengguna)
export const Signup = async (userData) => {
  try {
    const response = await API.post('/Signup/', userData);  // Menggunakan endpoint signup di backend
    return response.data;  // Mengembalikan data response
  } catch (error) {
    console.error('Terjadi kesalahan saat registrasi:', error);
    throw error; // Bisa lemparkan error untuk ditangani lebih lanjut di komponen
  }
};
