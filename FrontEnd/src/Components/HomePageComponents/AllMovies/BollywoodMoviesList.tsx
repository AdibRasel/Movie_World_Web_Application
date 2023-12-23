import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { BsBadge4KFill } from 'react-icons/bs';

import { AllMovieMoviesDetails } from "../../../APIService/APIService.js";

const BollywoodMoviesList = () => {
    const WatchBgImg1 = "https://m.media-amazon.com/images/M/MV5BYTcxYTA0MjAtYzdjNC00ZmFmLTgwYWItMmVhYTY5ZGZhOWQzXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg";
    const WatchBgImg2 = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
    const WatchBgImg3 = "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg";
    const WatchBgImg4 = "https://i1.sndcdn.com/artworks-Y0t4XIzmDwz4JSnv-mzzexg-t500x500.jpg";

    const [AllBollywood, setAllBollywood] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AllMovieMoviesDetails();
                setAllBollywood(response.data.bollywood.data);
            } catch (error) {
                console.error("Read Failed, Request Failed! API Service > Try > Catch", error);
            }
        };

        fetchData();
    }, []);

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
                {AllBollywood.map((movie) => (
                    <SwiperSlide key={movie._id} className='text-center'>
                        <div className="p-2" style={{ backgroundImage: `url(${movie.MovieThumbnail})`, width: "100%", height: "350px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>
                            <BsBadge4KFill className='' />
                            <h3 className='text-primary'>{movie.MovieName}</h3>
                            <NavLink to={`/MovieSee/${movie._id}`}>
                            <button className='btn btn-primary' style={{ marginTop: "150px", textAlign: "center" }}>PLAY NOW <i className="fa-solid fa-play fa-beat"></i></button>
                            </NavLink>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BollywoodMoviesList;
