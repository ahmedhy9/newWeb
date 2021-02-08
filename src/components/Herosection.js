import React from 'react'
import './Herosection.css'
function Herosection(
    {
        img,
        description,
        headline
    }
){
   
    return(
        <div className='col-4'>
            <div className="item">
            <img src={img} alt=""/>
            <h5>{headline}</h5>
            <p>{description}</p>
            </div>
        </div>
    )

}
export default Herosection;