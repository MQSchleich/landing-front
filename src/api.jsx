import api_link from './env.jsx'

export function postNewsletter(data) {
    console.log(data);
    //fetch( api_link+'api/newsletter', { method: 'POST', headers: { accept: 'application/json', body: JSON.stringify({ email: data }) } })
  };

export default postNewsletter;