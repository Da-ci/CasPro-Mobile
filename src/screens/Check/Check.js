import axios from 'axios';
export default function Check(authValues) {
  const {updateAccount, email, password} = authValues;
  //Login link with laravel
  axios
    .post('http://10.0.2.2:8000/api/login', {
      login: email,
      password: password,
    })
    .then(rsp => {
      console.log('context', rsp.data);
      if (rsp.data.message == 'Success') {
        updateAccount(rsp.data);
      }
    })
    .catch(error => {
      console.log('Login Failed !');
      console.log(error);
    });

  return null;
}
