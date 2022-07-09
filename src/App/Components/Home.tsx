import React, { useState, useEffect} from 'react';
import '../Style.scss';

export default function Home() {

  const [menuState, setMenuState] = useState<string>("");

  const changeMenu = () => {
    menuState ? setMenuState("") : setMenuState("active");    
  }

  useEffect(() => {
    scrolling("text");
  }, [])

  const scrolling = (elementTitle: string) => {
     const scrollTarget = document.querySelector(`.${elementTitle}`);
     const elementPosition = scrollTarget?.getBoundingClientRect().top;
     window.scrollTo({
       top: elementPosition,
       behavior: 'smooth',
     })
     setMenuState("");
   }


  return (
    <div className={`home ${menuState}`}>
      <header>
        <h2 className="initials">TA</h2>
        <nav className='navigation_links_container'>
            <a className="navigation_links" onClick={() => {scrolling("home")}}>Home</a>
            <a className="navigation_links"  onClick={() => {scrolling("stack")}}>Stack</a>
            <a className="navigation_links"  onClick={() => {scrolling("portfolio")}}>Portfolio</a>
            <a className="navigation_links"  onClick={() => {scrolling("contacts")}}>Contacts</a>
        </nav>
        <div className="menu">
          <div className="menu_icon" onClick={changeMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className={`menu_container ${menuState}`}>
          <a className="navigation_links" onClick={() => {scrolling("home")}}>Home</a>
            <a className="navigation_links"  onClick={() => {scrolling("stack")}}>Stack</a>
            <a className="navigation_links"  onClick={() => {scrolling("portfolio")}}>Portfolio</a>
            <a className="navigation_links"  onClick={() => {scrolling("contacts")}}>Contacts</a>
          </div>
        </div>
      </header>
      <div className="main_information_container">
        <div className="author_container">
          <div className="author_name">Thomas Alford</div>
          <div className="line"></div>
          <button className="btn_contact_me" onClick={() => {scrolling("contacts")}}>CONTACT ME</button>
        </div>
        <div className="logotype_container">
          <img src="../img/front-end.png" alt="" className='img' />
        </div>
        <div className="specialization_container">
          <div className="my_specialization">MY SPECIALIZATION</div>
          <div className="specialization_title">Frontend Developer</div>
          <div className="specialization_text">My name is Thomas Alford, i am 24 years old.I have been working as a frontend developer for over a year and have quite a lot of experience in this field. But despite all this, I'm not going to stop there.</div>
          <a className="learn_more_container" onClick={() => {scrolling("stack")}} >
            <div className="learn_more">Learn more</div>
            <img src="../../img/down_arrow.png" alt="" className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}
