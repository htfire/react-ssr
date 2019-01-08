require('es6-promise').polyfill();
import axios from 'axios';

const createInstance = (baseURL, req) => {
    const instance = axios.create({
        baseURL: baseURL,
        method: 'get',
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': req && req.header.cookie || ''
        },
        transformRequest: [function (data) {
            data = JSON.stringify(data);
            return data;
        }]
    });
    // request  interceptors
    instance.interceptors.request.use(
        config => {
            /**
             * handler difference between request 'GET' and 'POST',the config [params] name is different
             * request default type is GET
             */
            if (config.method.toUpperCase() === 'GET' && config.data)
                config.params = config.data;
            if (config.method.toUpperCase() === 'POST' && config.params)
                config.data = config.params;

            return config;
        },
        error => {
            console.log(error);
            return Promise.reject(error);
        })

    // response  interceptors
    instance.interceptors.response.use(
        response => {
            let _res = response.data;
            if (_res.code) {
                /**
                 * do something after request
                 */
            }
            return _res;
        },
        error => {
            console.log('err' + error);
            return Promise.reject(error);
        })
    return instance
}

export default createInstance;