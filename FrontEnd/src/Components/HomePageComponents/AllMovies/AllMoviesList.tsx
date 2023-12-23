import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';
import { AllMovieMoviesDetails } from "../../../APIService/APIService.js";

const AllMoviesList = () => {
    const [AllHollywood, setAllHollywood] = useState([]);
    const [AllBollywood, setAllBollywood] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AllMovieMoviesDetails();
                setAllHollywood(response.data.hollywood.data);
                setAllBollywood(response.data.bollywood.data);
            } catch (error) {
                console.error("Read Failed, Request Failed! API Service > Try > Catch", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <Swiper
                slidesPerView={6}
                spaceBetween={1}
                // modules={[Pagination]}
                className="mySwiper"
            >
                {AllHollywood && AllHollywood.length > 0 ? (
                    AllHollywood.map((movie) => (
                        <SwiperSlide key={movie._id} className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                            <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={movie.MovieThumbnail} alt={movie.MovieName} /> <br />
                            <div className="mb-3">
                                <h3 style={{ color: "#ffad00" }}>{movie.MovieName}</h3>
                                <NavLink to={`/MovieSee/${movie._id}`}>
                                    <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                                </NavLink>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p>No Hollywood movies available.</p>
                )}

                {AllBollywood && AllBollywood.length > 0 ? (
                    AllBollywood.map((movie) => (
                        <SwiperSlide key={movie._id} className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                            <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={movie.MovieThumbnail} alt={movie.MovieName} /> <br />
                            <div className="mb-3">
                                <h3 style={{ color: "#ffad00" }}>{movie.MovieName}</h3>
                                <NavLink to={`/MovieSee/${movie._id}`}>
                                    <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                                </NavLink>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p>No Bollywood movies available.</p>
                )}
            </Swiper>
        </div>
    );
};

export default AllMoviesList;
