import axios from 'axios';

export default async function (){
  return await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
}