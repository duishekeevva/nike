import React from 'react';
import './TeamSection.css'
import Picture from '../Assets/Rectangle 4.png'


const TeamSection = () => {
    return (
        <section className={'team-section'}>
            <div className="container">
                <div className={'team-section-content'}>
                    <p>Every team</p>
                    <h2><span style={{color:'#0949EF'}}>One</span> store</h2>
                    <h1><span style={{color:'#FB0223'}}>Every</span> team</h1>
                    <h5>SElect your favorite team to view it’s jersys.</h5>

                    <div className={'row'}>
                        <div className="col-6">
                            <p className={'team-text'}>EAST</p>
                            <div className="row">
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className={'team-text'}>West</p>
                            <div className="row">
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                                <div className="col-2">
                                    <img src={Picture} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span>
                    <button  className={'about-team'}>
                        About Team
                        <svg width="61" height="9" viewBox="0 0 61 9" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z"
                                fill="#FB0223"/>
                        </svg>
                    </button>
                </span>
            </div>
        </section>
    );
};

export default TeamSection;