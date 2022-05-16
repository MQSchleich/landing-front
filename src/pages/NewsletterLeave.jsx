import React from "react"
import { useSearchParams } from "react-router-dom"
import api_link from '../env.jsx'


function handleErrors(response) {
    console.log(JSON.stringify(response))
    return response;
}



const NewsletterLeave = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const token= searchParams.get("token")
  const email = searchParams.get("email")
  //send-api-call
  const request = {'email': email}
  fetch(api_link+'api/newsletter/leave/'+token, 
      { method: 'POST', 
      body: JSON.stringify(request),
      headers: { 'Content-Type': 'application/json'}}).then(handleErrors)
      .then(function(response) {
          console.log("ok");
      }).catch(function(response) {
          console.log(response);
      });
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
    <p className="mb-4 md:mb-0 md:text-xl">We are sad you leave, but we still you ⛵️</p>
    </div>
  )
}

export default NewsletterLeave;