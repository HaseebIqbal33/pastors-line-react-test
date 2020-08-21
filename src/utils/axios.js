import axios from 'axios';
export const Axios = axios.create({
    baseURL: 'https://api.dev.pastorsline.com/api',
    headers: {'Authorization': 'Bearer '+"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk",
              "Access-Control-Allow-Origin":" *" }
  });