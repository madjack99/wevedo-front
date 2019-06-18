import axios from 'axios';
const URL = 'http://localhost:8000/api/categories';

function categoriesGet(setCategory) {
    axios.get(URL)
    .then(response => response.data)
    .then(data => setCategory(data)
    )
}

export default categoriesGet;