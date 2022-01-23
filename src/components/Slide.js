import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
  'https://c0.wallpaperflare.com/preview/661/131/640/pharmacist-pharmacy-medicine-man.jpg',
  'https://previews.123rf.com/images/ivanburchak/ivanburchak1802/ivanburchak180200015/96203446-drugstore-pharmacy-single-flat-icon-striped-awning-and-signboard-a-series-of-shop-icons-vector-illus.jpg',
  'https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBoYXJtYWN5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  'https://www.wallpaperup.com/uploads/wallpapers/2016/02/25/898857/52d70d2759cff2975fca438cb0bb6080-700.jpg'
];


const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide ">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;