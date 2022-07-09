import React from 'react';
import '../Style.scss';

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts_container">
        <h4 className="contact_me_text">MY CONTACT</h4>
        <h2 className="ways_contact_text">Ways To Contact Me</h2>
        <p className="contact_description">If you are interested in me, you can contact me on one of the social networks.</p>
        <div className="contact_links_container">
          <a href="https://t.me/Intellectual_ego" target="blank" className="contact_container" id="one">
            <img src="./img/telegram.png" alt="" className="contact_icon" />
            <div className="contact_title">Telegram</div>
          </a>
          <a href="https://wa.me/qr/SPY6NC2OIH6TA1" target="blank" className="contact_container" id="two">
            <img src="./img/whatsapp.png" alt="" className="contact_icon" />
            <div className="contact_title">Whatsapp</div>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqhbwdqpWZdgNtqJdKsWXbxrNtkzsBXsrHfPZLcCClDFqJZNnHspbfMXFXrxKnKrQMpwfB" target="blank" className="contact_container" id="three">
            <img src="./img/gmail.png" alt="" className="contact_icon" />
            <div className="contact_title">Gmail</div>
          </a>
          <a href="https://hh.ru/resume/eb6a9e36ff0af20a9f0039ed1f757041367369" target="blank" className="contact_container"  id="four">
            <img src="./img/hh.png" alt="" className="contact_icon" />
            <div className="contact_title" >hh</div>
          </a>
        </div>
      </div>
    </div>
  )
}
