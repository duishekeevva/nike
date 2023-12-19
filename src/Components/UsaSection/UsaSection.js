import React, {useEffect, useState} from 'react';
import Picture from "../Assets/DRTwwktVwAARX0P 1.png";
import './style.scss'
import axios from "axios";

const UsaSection = () => {
    const [data, setData] =useState([])
    useEffect(() => {
        axios('https://65642480ceac41c0761d7ea7.mockapi.io/nike')
            .then(({data})=>setData(data))
    }, []);
    return (
        <section className={'usa-section'}>
            <div className="container">
                <div className={'usa-box'}>
                    <p className={'usa-box_subtitle'}>Jerseys 1992 team usa</p>
                    <h2 className={'usa-box_title'}><span style={{color:'#0949EF'}}>1992</span> team usa</h2>
                    <h1 className={'usa-box_caption'}>Authentic edition</h1>
                    <div className="usa-box_text">
                        <p>Jerseys of the united sates man’s olympics basketball team, <br/> which represented the us of a in the 1992 summer olympics in barcelona.</p>
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
                    <div className={'usa-box_excerpt'}>
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

export default UsaSection;