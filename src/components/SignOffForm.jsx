import React from 'react'
import SignOffButton from './SignOffButton.jsx';
import api_link from '../env.jsx'

function handleErrors(response) {
    console.log(JSON.stringify(response))
    return response;
}


class SignOffForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: '',
                    reason: ''};
  
      this.handleChangeMail = this.handleChangeMail.bind(this);
      this.handleChangeReason = this.handleChangeReason.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeMail(event) {
        const value = event.target.value;
        this.setState((prevState)=>({email: value, reason: prevState.reason }),
        ()=>{ console.log(this.state)});
    }
    
    handleChangeReason(event) {
        const value = event.target.value;
        this.setState((prevState)=>({ email: prevState.email, reason: value}),
        ()=>{ console.log(this.state)});
    }
    
    handleSubmit(evt) {
      console.log(this.state)
      const mail = this.state.email
      const reason = this.state.reason;
      const request = {'email': mail, 
                        'reason': reason}
      fetch(api_link+'api/newsletter/leave', 
      { method: 'POST', 
      body: JSON.stringify(request),
      headers: { 'Content-Type': 'application/json'}}).then(handleErrors)
      .then(function(response) {
          console.log("ok");
      }).catch(function(response) {
          console.log(response);
      });
      //postNewsletter(this.state.value);
      alert('We sent you a conformation to: ' + this.state.email);
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
                        placeholder="Your email"
                        type="email"
                        name="email"

                        value={this.state.email} 
                        onChange={this.handleChangeMail}
                        className="text-1xl text-black placeholder:text-black placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-90 focus:bg-opacity-90 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-dashed mb-4 md:mb-0"
                    />
                                        <input
                        placeholder="Give us a reason"
                        type="text"
                        name="reason"
                        value={this.state.reason} 
                        onChange={this.handleChangeReason}
                        className="text-1xl text-black placeholder:text-black placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-90 focus:bg-opacity-90 duration-150 md:rounded-tr-none md:rounded-br-none  outline-2 mb-4 md:mb-0"
                    />
                    <SignOffButton />
                    
                </div>

                <div className="opacity-75">
                    By using our services, you agree with our <a target="_blank" href="https://www.sail.black/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
                </div>

            </form>
      );
    }
  };

export default SignOffForm;