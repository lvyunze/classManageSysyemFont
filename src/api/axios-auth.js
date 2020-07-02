import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/v1',
    headers: {
        'Authorization': {
            toString() {
                return `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
});

export default instance