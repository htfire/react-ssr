import createInstance from './_base'

const clientInstance = (req) => {
    let baseURL = '/'
    return createInstance(baseURL, req)
}

export default clientInstance