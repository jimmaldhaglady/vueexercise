import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/'

export default() => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const HTTP = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export const FileUp = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data'
  }
})
/*
export class APIService{

constructor(){
}

}
*/
