import axios from 'axios'
import APIURL from './url'
export const wx = (data)=>{
    return axios.get(APIURL.baseURL + 'web/wxjssdk/wx-sdk')
}
export const list = (data)=>{
    return axios.post(APIURL.baseURL+'web/symbol/list')
}