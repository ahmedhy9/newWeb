import React from 'react'
import './Content.css'
function Content(
    {
        headline,
        des,
        titleLink,
    }
   

){
    return(
        <div className="col-6">
            <div className="content-item">
            <h2>{headline}</h2>
            <p>{des}</p>
            <a href="#">{titleLink}</a>
            </div>
        </div>
    )
}
export default Content