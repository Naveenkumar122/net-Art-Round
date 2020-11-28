import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div id="header">
             <img src="./asserts/logo.png" alt=""/>
          </div>
          <div id="section1">
             <div id="col1">
             <div id="trophy">
                <img src="./asserts/1.png" alt=""/>
             </div>
             </div>
             <div id="col2">
                <div id="info">
                <h1><p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p></h1>
                <ul>
                   <li><p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p></li>
                   <li><p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p></li>
                </ul>
                </div>
                <div id="cl2_img">
                    <img src="./asserts/2.png" alt=""/>
                </div>
                <div id="cl2_img_info">
                <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
             </div>
          </div>
          <div id="section2">
             <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
             <img src="./asserts/3.png" alt=""/>
             <p style={{textAlign: "center"}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
             <hr/>
          </div>
          <div id="footer">
             <h4 style={{textAlign: "center"}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
             <p>CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER<span> |</span> OILS & GAS <span>|</span> PHARMA SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</p>
             <br/>
             <div id="contact-details">
                 <p><img src="./asserts/phone-call.svg" alt=""/>Toll free 1800-200-1234</p>
                 <p><img src="./asserts/facebook.svg" alt=""/>www.facebook.com/cripumps</p>
                 <p><img src="./asserts/globe.svg" alt=""/>www.crigroups.com</p>
             </div>
          </div>
      </div>
       
    );
  }
}

export default App;
