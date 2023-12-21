import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import { MdCalendarMonth } from 'react-icons/md';
import { FaSms } from 'react-icons/fa';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { BsBadge4KFill, BsBadgeHdFill, BsAmd, BsFillTaxiFrontFill, BsFillPieChartFill, BsFillMotherboardFill } from 'react-icons/bs';




const WatchNow = () => {

    const WatchBgImg1 = "https://m.media-amazon.com/images/M/MV5BYTcxYTA0MjAtYzdjNC00ZmFmLTgwYWItMmVhYTY5ZGZhOWQzXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg";
    const WatchBgImg2 = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
    const WatchBgImg3 = "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg";
    const WatchBgImg4 = "https://i1.sndcdn.com/artworks-Y0t4XIzmDwz4JSnv-mzzexg-t500x500.jpg";


    return (
        <div className=''>




            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className="p-2" style={{ backgroundImage: `url(${WatchBgImg1})`, width: "100%", height: "350px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>
                        <BsBadge4KFill className='' />
                        <h2>The Shawshank Redemption (1994)</h2>
                        <button className='btn btn-outline-primary' style={{marginTop:"100px", textAlign:"center"}}>PLAY NOW <i className="fa-solid fa-play fa-beat"></i></button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-2" style={{ backgroundImage: `url(${WatchBgImg2})`, width: "100%", height: "350px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>
                        <BsBadge4KFill className='' />
                        <h2>The Godfather (1972)</h2>
                        <button className='btn btn-outline-primary' style={{marginTop:"100px", textAlign:"center"}}>PLAY NOW <i className="fa-solid fa-play fa-beat"></i></button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-2" style={{ backgroundImage: `url(${WatchBgImg3})`, width: "100%", height: "350px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>
                        <BsBadge4KFill className='' />
                        <h2>The Dark Knight (2008)</h2>
                        <button className='btn btn-outline-primary' style={{marginTop:"100px", textAlign:"center"}}>PLAY NOW <i className="fa-solid fa-play fa-beat"></i></button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-2" style={{ backgroundImage: `url(${WatchBgImg4})`, width: "100%", height: "350px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>
                        <BsBadge4KFill className='' />
                        <h2>Pulp Fiction (1994)</h2>
                        <button className='btn btn-outline-primary' style={{marginTop:"100px", textAlign:"center"}}>PLAY NOW <i className="fa-solid fa-play fa-beat"></i></button>
                    </div>
                </SwiperSlide>


            </Swiper>











        </div>
    )
}

export default WatchNow