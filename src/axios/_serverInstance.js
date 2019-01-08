import createInstance from './_base'

const serverInstance = (req) => {
    let baseURL = 'https://www.easy-mock.com/mock/5c1864329172fa10e61b63ff';
    return createInstance(baseURL, req)
}

export default serverInstance