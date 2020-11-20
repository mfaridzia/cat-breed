// import axios from 'axios';

// const httpClient = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   timeout: 5000
// });

// httpClient.interceptors.request.use(function (config) {
//     config.headers['x-api-key'] = process.env.REACT_APP_API_KEY;
//     return config;
// });

// export default httpClient;

import axios from 'axios';

const http = axios.create ({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  headers: {'Content-Type': 'application/json'},
});

http.interceptors.request.use (
  function (config) {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (apiKey) config.headers['x-api-key'] = apiKey;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default http;