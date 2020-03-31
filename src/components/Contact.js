import React from 'react';
import './Contact.css';

function Contact() {
    return (
  <div className="Contact">
    <img className="avatar" src="https://randomuser.me/api/portraits/men/2.jpg" atlt="Alex Grant" />
    <div> 
      <p className="name">Alex Grant</p>
    <div className="status">
      <div className="status online" />
     <p className="status-text">online</p>
      </div>
    </div>
  </div>
);
    }

export default Contact;