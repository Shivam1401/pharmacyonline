import React from 'react';
import  Navbar  from './Navbar';
import Footer from './Footer';
const Aboutpage = () => {
    return (
        <div >
            <div className='about-page'>
                <Navbar />
                <h3 style={{textAlign:'center'}}> About US</h3>
          

                <p><span style={{fontWeight:'bold'}}>➕Online🩸💊Pharmacy🩺.com </span>is the online gateway to your favourite medical and general store. With over 1800 pharmacy stores and omni-channel service, ➕Online🩸💊Pharmacy🩺 is trusted by over 3 lakh customers daily across 7 states in India.</p>

                <p>At ➕Online🩸💊Pharmacy🩺.com you can order the products you regularly buy from our stores from the convenience of home and pick them up from a ➕Online🩸💊Pharmacy🩺 store near you. To start shopping, simply search for the products you wish to buy, choose the quantity and place the order. We will inform you when the medicines are ready for pick up. All orders are filled within 6 hrs during the regular business hours and on the next day for evening or weekend orders.</p>

                <p>At ➕Online🩸💊Pharmacy🩺.com, you can also view or take prints of all your previous Pharmacy bills, and conveniently reorder the products you bought earlier. Regardless of how you shop at MedCure, be assured that we will continue to offer you high quality and genuine products, stored and handled in optimal conditions at attractive discounts.</p>

                <p>➕Online🩸💊Pharmacy🩺 has always been and continue to be your one-stop shop for all your medicines and general product needs, now with the added convenience of shopping from home at the click of a button.</p>
          
            </div>
            <Footer/>
        </div>
    );
};
export default Aboutpage;