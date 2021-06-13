import React, { Component } from 'react';
import '../contact/contact.css';

class ContactPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="homeMain contactContent">
                <h2>Contact</h2>
                <p>
                    <h5>Mundackal Stores</h5>
                    Pizhaku P.O
                    <br></br>
                    Pizhaku - 686651
                    <br></br>
                    Kottayam, Kerala, India. 
                    <br></br>
                    <b>For Enquiries: </b><span>+91 9746827775</span>
                </p>
            </div>
         );
    }
}
 
export default ContactPage;