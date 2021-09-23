import axios, { AxiosResponse } from 'axios';

const HttpClient = () => {
    return axios.create({
        baseURL: 'https://digitown-backend.herokuapp.com',
        timeout: 3000
    })
}

export default HttpClient();