import React from 'react'
import SubmitButton from './SubmitButton.jsx';
import api_link from '../env.jsx'

function handleErrors(response) {
    console.log(JSON.stringify(response))
    return response;
}


class NewsletterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      const mail = this.state.value
      const request = {'email': mail}
      fetch(api_link+'api/newsletter', 
      { method: 'POST', 
      body: JSON.stringify(request),
      headers: { 'Content-Type': 'application/json'}}).then(handleErrors)
      .then(function(response) {
          console.log("ok");
      }).catch(function(response) {
          console.log(response);
      });
      //postNewsletter(this.state.value);
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
       
				<form 
                id="revue-form"
                name="revue-form"
                onSubmit={this.handleSubmit}
                >

                <div className="flex flex-col md:flex-row justify-center mb-4">
                    <input
                        placeholder="Your email address..."
                        type="email"
                        name="member[email]"
                        id="member_email"
                        value={this.state.value} 
                        onChange={this.handleChange}
                        className="text-2xl text-black placeholder:text-black placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-secondary bg-opacity-90 focus:bg-opacity-90 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
                    />
                    <SubmitButton/>
                    
                </div>

                <div className="opacity-75">
                    By subscribing, you agree with our <a target="_blank" href="./privacy" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="./privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
                </div>

            </form>
      );
    }
  }

export default NewsletterForm;