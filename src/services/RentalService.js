import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mstknk/vue-rentals',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getRentals() {
    return apiClient.get('/rentals')
  },
  getRental(id) {
    return apiClient.get('/rentals/' + id)
  }
}
