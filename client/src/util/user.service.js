import axios from 'axios';

export default function userService (url,result,err) {
axios.get(url)
  .then(function (response) {
    result(response);
  })
  .catch(function (error) {
    err(error);
  });
  
}