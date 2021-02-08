import React from 'react'
import { EvData1,EvData2,EvData3 } from './Data'
import Evaluation from './Evaluation'
import './SectionFive.css'
function SectionFive(){
    return(
        <div className="section-5">
            <div className="container">
                <div className="row">
                <h2>What clients are saying </h2>
                </div>
                <div className="row">
                <Evaluation {...EvData1}/>
                <Evaluation {...EvData2}/>
                <Evaluation {...EvData3}/>
                </div>
            </div>
        </div>
    )
}
export default SectionFive