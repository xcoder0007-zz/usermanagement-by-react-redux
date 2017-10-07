import axios from 'axios';

export default async function (){
  await axios.get(url)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    return error
  });
}