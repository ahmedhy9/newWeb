import React from 'react'
import Content from './Content'
import {ContentData} from './Data'
import './SectionThrere.css'


function SectionThrere(){
    return(
        
        <div className="section-3">
            <div className="img-ph">
                <img src="images/Rank.png" alt=""/>
                <img src="images/Top.png" alt=""/>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-6"></div>
            <Content {...ContentData}/>
            </div>
            </div>
        </div>
    )
}
export default SectionThrere
