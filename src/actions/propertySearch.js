/*
  Exports action to fetch property list
*/

import axios from 'axios';
import { API,getHeaders } from '../config';


export function getPropertyData() {
   
    const config = {
        url: `${API.API_LINK}?limit=50&lastId=0`,
        method: 'GET',
        headers: getHeaders()
    };


    var request = axios.request(config)
        .then((response) => {
            return response.data;
        });

    return request

}

export function getPropertyDetail(id) {
   
    const config = {
        url: `${API.API_LINK}/${id}`,
        method: 'GET',
        headers: getHeaders()
    };


    var request = axios.request(config)
        .then((response) => {
            return response.data;
        });

    return request

}

