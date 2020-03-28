import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/' // url do gitpod -'https://3333-e19fa426-c5f7-49bc-9bbf-a461acd2c951.ws-us02.gitpod.io/'
})

export default api;