import React from 'react';

const SubmitButton = props => {
    return (
        <div>
            <button
			    type="submit"
			    name="member[subscribe]"
			    id="member_submit"
			    className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"> 
            Join us!
            </button>
        </div>
    );
};

export default SubmitButton;
