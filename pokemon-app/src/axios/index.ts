import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3001/pokemon',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
  }
});

export { request };
