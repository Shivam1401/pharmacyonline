import React from 'react';
import avelia from '../images/avelia.jpg';
import discount from '../images/discount1.jpg';
import discount2 from '../images/discount2.jpg';
import discount3 from '../images/discount.jpg';
import baby from '../images/baby.jpg';
import '../styles/Home.css';
import { useState } from 'react';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Footer from './Footer';


const Home = () => {
    const [sideToggle, setSideToggle] = useState(false);
    return (
        
        <div className='home-page'>
            <Navbar click={() => setSideToggle(true)} />
            <marquee direction="right" size="+2" className="bg-red-600 py-3 px-3 font-bold text-black">
                🔬Hello User Welcome to Online Pharmacy Store🏥
                🩺STAY HOME!! STAY HEALTHY !!🏡
                🚑 Leading Online Pharmacy & Healthcare Platform💊
                💉STAY HOME!! STAY HEALTHY !!🩹
                🩸Hello User Welcome to Online Pharmacy Store🏥
            </marquee>;
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <h1 className='title' style={{textAlign:'center'}}>WELCOME TO ➕Online🩸💊Pharmacy🩺</h1>
            <img src={baby} alt="baby product"></img>
            <br></br>
            <img src={avelia} alt="avelia soap"></img>
            <br></br>
            <img src={discount} alt="discountoffer "></img>
            <br></br>
            <img src={discount2} alt="discountoffer"></img>
            <br></br>
            <img src={discount3} alt=" discountoffer"></img>
            <Footer/>
        </div>
                          
       
    );
};
export default Home;