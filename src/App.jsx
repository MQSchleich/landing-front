import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Landing, NewsletterVer, NewsletterLeave, NoPage } from "./pages";

function postNewsletter(data) {
    alert('We sent you an invitation to'+data+'!');
    fetch( api_link, { method: 'POST', headers: { accept: 'application/json', body: JSON.stringify({ email: data }) } })
  }
function App(props) {

  return (
	<BrowserRouter>
	<Routes>
	  <Route path="/" element={<Layout />}>
		<Route index element={<Landing />} />
		<Route path="newsletter" element={<NewsletterVer />} />
		<Route path="newsetter/leave" element={<NewsletterLeave />} />
		<Route path="*" element={<NoPage />} />
	  </Route>
	</Routes>
  </BrowserRouter>
  )
}

export default App
