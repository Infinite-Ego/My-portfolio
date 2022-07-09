import React from 'react'
import '../Style.scss';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="portfolio_container">
        <h4 className="portfolio_text">PORTFOLIO</h4>
        <h2 className="projects_title">My Project Collection</h2>
        <div className="projects_description">Here are all my projects on which I have shed a lot of sweat.</div>
        <div className="projects_container">
          <div className="project">

              <img src="./img/project_1.png" alt="" className="project_icon" />

          </div>
          <div className="project">
            <a href="https://www.sravni.ru/" target="blank">
              <img src="./img/project_2.png" alt="" className="project_icon"/>
            </a>
          </div>
          <div className="project">
            <a href="https://www.gblnet.net/ru" target="blank">
              <img src="./img/project_3.png" alt="" className="project_icon"/>
            </a>
          </div>
          <div className="project">
            <a href="https://dataix.eu/ru" target="blank">
              <img src="./img/project_4.png" alt="" className="project_icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
