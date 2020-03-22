import axios from 'axios';

export const SET_DATA = 'SET_DATA';
export const FETCH_DATA = 'FETCH_DATA';

export const setData = (data) => ({
  type: SET_DATA,
  data
});

export const fetchData = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => dispatch(setData(response.data)))
}