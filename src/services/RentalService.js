import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com?destinationName=California&checkIn=2021-01-27&checkOut=2021-01-28&rooms=1&locale=en_US&currency=USD&pageNumber=1',

  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com',
    'x-rapidapi-key': 'ee06506eb7msh7e99270bcdf5778p1a2464jsnc9b293893d89',
    //'Access-Control-Allow-Origin': '*'
  }
})

export default {
  getRentals() {
    return apiClient.get('/')
  },
  getRental(id) {
    return apiClient.get('data/' + id)
  },
  getImages(id) {
    return apiClient.get('/data/image/' + id)
  }
}
