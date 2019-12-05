import * as API from './apilink';
const getHeaders=()=>{
    const headers= {
        'Authorization': process.env.Authorization,
        'Content-Type': 'application/json'
    }
    return headers;
}
export {
    API,
    getHeaders
};