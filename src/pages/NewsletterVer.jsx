import React from "react"
import { useSearchParams } from "react-router-dom"
import api_link from '../env.jsx'


function handleErrors(response) {
    console.log(JSON.stringify(response))
    return response;
}



const NewsletterVer = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const token= searchParams.get("token")
  const email = searchParams.get("email")
  //send-api-call
  const request = {'email': email}
  fetch(api_link+'api/newsletter/'+token, 
      { method: 'POST', 
      body: JSON.stringify(request),
      headers: { 'Content-Type': 'application/json'}}).then(handleErrors)
      .then(function(response) {
          console.log("ok");
      }).catch(function(response) {
          console.log(response);
      });
  return (
    <div className="flex flex-col md:flex-row justify-center mb-4">
    <p className="text-base md:text-lg lg:text-2xl mb-8">We love to have you on the ⛵️</p>
    </div>
  )
}

export default NewsletterVer;