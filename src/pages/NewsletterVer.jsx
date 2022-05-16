import React from "react"
import { useSearchParams } from "react-router-dom"

const NewsletterVer = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const token= searchParams.get("token")

  return (
    <div className="App">
      <p>Value of token: {token}</p>
    </div>
  )
}

export default NewsletterVer;