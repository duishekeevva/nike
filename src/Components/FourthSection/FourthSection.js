import React, {useEffect, useState} from 'react';
import Picture from "../Assets/DRTwwktVwAARX0P 1.png";
import './style.scss'
import axios from "axios";

const FourthSection = () => {
    const [data, setData] =useState([])
    useEffect(() => {
        axios('https://65642480ceac41c0761d7ea7.mockapi.io/nike')
            .then(({data})=>setData(data))
    }, []);
    return (
        <section className={'fourth-section'}>
            <div className="container">
                <div className={'bryant-box'}>
                    <p className={'bryant-box_subtitle'}>Jerseys kobe bryant</p>
                    <h2 className={'bryant-box_title'}><span style={{color:'#FCBF05'}}>kobe</span> bryant</h2>
                    <h1 className={'bryant-box_caption'}>Authentic edition</h1>
                    <div className={'bryant-box_text'}>
                        <p>Kobe bryant: a basketball legend. bryant crafted a storied career</p>
                        <p>In his 20 seasons with the lakers. the lagacy of kobe bryant was a far-reaching one.</p>
                    </div>
                    <div className="row">
                        {
                            data.map(el=>
                                <div className={'col-4'}>
                                    <img className={'lakers'} src={el.src} alt=""/>
                                    <div className={'overview'}>
                                        <div className={'overview-text'}>
                                            <span>{el.name} </span>
                                            <span>{el.description}</span>
                                        </div>
                                        <span style={{color:'white'}}>{el.price}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className={'bryant-box_excerpt'}>
                            <button style={{color: '#fff'}}>
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

export default FourthSection;