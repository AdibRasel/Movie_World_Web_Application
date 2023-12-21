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

    const WatchBgImg1 = "data:image/jpeg;base64,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";
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