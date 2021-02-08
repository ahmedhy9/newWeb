import React from 'react'
import './Evaluation.css'
function Evaluation(
    {
        des,
        nam,
        job,
        img,
     
    }
){
    return(
        <div className="col-4">
        <div className="ev">
            
            <div className="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </div>
            <div className="itmes">
                <p>{des}</p>
                <img src={img} alt=""/>
                <div className="info">
                <h6>{nam}</h6>
                <span>{job}</span>
                </div>
                
                
            </div>
        </div>
        </div>
    )
}
export default Evaluation