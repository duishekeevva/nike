import React from 'react';
import Pic from '../Assets/unsplash_47KbIvcklh8.png'
import './style.scss'

const TheNikeSection = () => {
    return (
      <section className={'the-nike-section'}>
          <div className="container">
              <div className="the-nike-box">
                  <p className={'the-nike-box_subtitle'}>The application</p>
                  <h2 className={'the-nike-box_title'}>The nike</h2>
                  <h1 className={'the-nike-box_caption'}>App</h1>

                  <div className={'the-nike-box_text'}>
                      <p>Here you can find many interesting and useful from nike. <br/>Download the application from nike.</p>
                  </div>

                  <img src={Pic} alt=""/>
                  <div className={'the-nike-box_tagline'}>
                      <span>Nike Traning Club</span>
                      <span>Home workouts & fitness plans</span>
                  </div>
                  <div className={'the-nike-box_excerpt'}>
                      <button>
                          View all
                          <svg
                              width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223"/>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default TheNikeSection;