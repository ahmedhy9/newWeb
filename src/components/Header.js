import React from 'react'
import './Header.css'
import Herosection from './Herosection'
import {DataOne} from './Data' 
import {DataTwo} from './Data'
import From from './Form'
import {FormData} from './Data'
import SectionThrere from './SectionThrere'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
function Header(){
    return(
        
        <div className="main-header">
            
            <div className="svg-content">
                <svg>
                    <circle r='50%' cy='50%' cx='50%'/>
                    <circle r='40%' cy='60%' cx='47%'/>
                    <circle r='33%' cy='67%' cx='47%'/>
                </svg>
            </div>
            <div className="container-fluid">
            <div className="row">
            <div className="navbar">
                <h2 >Dash</h2>
                <button >try free</button>
            
            </div>
            </div>
            <div className="row">
                <div className="col-8">
            <div className="content-header">
                <h1>Task management<br/> and lists Tool</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
              <From {...FormData}/>
                <div className="row">
                    <div className="col-lg-8">
                <div className="head-photes">
                    <div className="row">
                        <div className="col-3">
                            <img src="images\Cartoon_Network_logo.png" alt=""/>
                        </div>
                        <div className="col-5">
                            <img src="images\Booking.com_logo.png" alt=""/>
                        </div>
                        <div className="col-4">
                            <img src="images\Dropbox_logo.png" alt=""/>
                        </div>
                        
                    </div> 
                    {/* row */}
                    <div className="row">
                    <div className="col-4">
                            <img src="images\Toshiba_logo.png" alt=""/>
                        </div>
                        <div className="col-4">
                            <img src="images\slack.png" alt=""/>
                        </div>
                        <div className="col-4">
                            <img src="images\netflix-2.png" alt=""/>
                        </div>
                        
                        </div>
                        {/* row */}
                    <div className="row">
                    <div className="col-4">
                            <img src="images\spotify-1.png" alt=""/>
                        </div>
                        <div className="col-4">
                            <img src="images\coca-cola.png" alt=""/>
                        </div>
                        <div className="col-4">
                            <img src="images\redbull.png" alt=""/>
                        </div>
                        
                        </div>
                        {/* row */}
                    
                </div>
                </div>
                {/* hedph */}
                </div>
            </div>

        </div>
        </div>
        </div>
        <section className="section-two">

       
        <div class="container">
        
                <h2>
                Key benefits of using task management software
                </h2>
            
            <div className="row">
  

        <Herosection {...DataOne} />
        <Herosection {...DataTwo}/>
        <Herosection {...DataTwo}/>
      
        </div>
        </div>
        </section>
        
        <SectionThrere />
        <SectionFour/>
        <SectionFive/>
       <div className="footer">
           <div className="container">
               <div className="row">
                  <div className="content-footer">
                  <h2>Get better work done</h2>
                   <p>See why millions of people across 195 countries use Dash.</p>
                  </div>
               </div>
               <div className="row">
                   <div className="form-1">

               
       <From {...FormData}/>
       </div>
       </div>
       </div>
       </div>
        </div>
    )
}
export default Header