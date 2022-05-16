import React, { Component } from 'react';
class NewsletterVer extends Component {
    render() {
        const { token } = this.props.match.params;
        return (
            <div>Token: { token }</div>
        );
    }
};
export default NewsletterVer;