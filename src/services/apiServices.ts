import axios from 'axios';

export const api = axios.create(
    {
        baseURL: 'http://localhost:3001'
    }
);

export const api_integration = axios.create(
    {
        baseURL: 'http://localhost:8082'
    }  
);

