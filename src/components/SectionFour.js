import React from 'react'
import Content from './Content'
import { ContentData } from './Data'
import './SectionFour.css'

function SectionFour(){
    return(
        <div className="section-4">
            <div className="img-ph2">
            <img src="images/Group.png" alt=""/>
                <img src="images/Banner.png" alt=""/>
                

            </div>
            <div className="container">
                <div className="row">
                    <Content {...ContentData}/>
                </div>
            </div>

        </div>

    )
}
export default SectionFour