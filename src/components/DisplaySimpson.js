import React from 'react';
import './DisplaySimpson.css';

function DisplaySimpson({simpson}) {
    return(
        <div className="DisplaySimpson">
            <img src={simpson.image}/>
            <ul>
                <p> {simpson.character} </p>
                <li>{simpson.quote}</li>
            </ul>
        </div>
    );
}
export default DisplaySimpson;