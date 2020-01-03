import axios from 'axios'

export default data => {
  return axios.post('https://backoffice.v1.backend.dev.mrjeffapp.net/user-service/v1/auth/jwt/generate', data)
}