import axios from 'axios';

export default axios.create(
    {
        baseURL:"https://ecom-7a1cd-default-rtdb.asia-southeast1.firebasedatabase.app/"
    }
)