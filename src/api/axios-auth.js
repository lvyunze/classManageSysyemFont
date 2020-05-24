import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://106.14.117.35:5001/api/v1',
    headers: {
        'Authorization': {
            toString() {
                return `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
});

export default instance