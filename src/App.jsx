import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Landing, NewsletterVer, NewsletterSignOff, NewsletterLeave, NoPage } from "./pages";
import Privacy from "./pages/Privacy";

function App(props) {

  return (
	<BrowserRouter>
	<Routes>
	  <Route path="/" element={<Layout />}>
		<Route index element={<Landing />} />
		<Route path="newsletter" element={<NewsletterVer />} />
		<Route path="newsletter/leave" element={<NewsletterSignOff />} />
		<Route path="newsletter/leave/confirm/" element={<NewsletterLeave />} />
		<Route path="privacy" element={<Privacy />} />
		<Route path="*" element={<NoPage />} />
	  </Route>
	</Routes>
  </BrowserRouter>
  )
}

export default App
