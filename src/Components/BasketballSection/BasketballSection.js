import React from 'react';
import './style.scss'

const BasketballSection = () => {
    return (
        <section className={'basketball-section'}>
            <div className="container">
                <div className="basketball-box">
                    <p className={'basketball-box_subtitle'}>Hall of fame</p>
                    <h2 className={'basketball-box_title'}>BAsketball</h2>
                    <h1 className={'basketball-box_caption'}>Hall of fame</h1>

                    <div className={'basketball-box_text'}>
                        <p>The naismith memorial basketball hall of fame is home to more than</p>
                        <p>Four nundred iductees and more than 40 000 square feet of basketball history.</p>
                    </div>
                    <div className={'basketball-box_years'}>
                        <span>2005</span>
                        <span>2006</span>
                        <span>2007</span>
                        <span>2008</span>
                        <span>2009</span>
                        <span>2010</span>
                        <span>2011</span>
                        <span>2012</span>
                    </div>
                    <div className={'basketball-box_slider'}>
                        <svg width="1000" height="2" viewBox="0 0 1000 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="1000" y2="1" stroke="#D2D2D2" stroke-width="2"/>
                        </svg>
                    </div>
                    <div className={'basketball-box_players'}>
                        <div className={'basketball-box_players__player'}>
                            <p><span style={{color:'#FB0223'}}>Michael</span> jordan</p>
                            <button className={'basketball-box_players__player___more'}>
                                View
                                <svg
                                    width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223"/>
                                </svg>
                            </button>
                        </div>
                        <div className={'basketball-box_players__player'}>
                            <p><span style={{color:'#C5C5C5'}}>David</span> robinson</p>
                            <button className={'basketball-box_players__player___more'}>
                                View
                                <svg
                                    width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223"/>
                                </svg>
                            </button>
                        </div>
                        <div className={'basketball-box_players__player'}>
                            <p><span style={{color:'#094E10'}}>John</span> stockton</p>
                            <button className={'basketball-box_players__player___more'}>
                                View
                                <svg
                                    width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={'basketball-box_excerpt'}>
                        <button>
                            Official Site
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

export default BasketballSection;