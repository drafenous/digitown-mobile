import axios, { AxiosResponse } from 'axios';

const HttpClient = () => {
    return axios.create({
        baseURL: 'https://digitown-backend.herokuapp.com',
        // baseURL: 'http://192.168.15.14:3000',
        timeout: 3000
    })
}

export default HttpClient();