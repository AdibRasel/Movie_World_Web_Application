import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';

const AllMoviesList = () => {






    const MovieImage1 = "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    const MovieImage2 = "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
    const MovieImage3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswCANXHaSMwCJFbNrIvfFT9qIVxNkvSpoTA&usqp=CAU"
    const MovieImage4 = "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"






    return (<>

        <div className="">



            <Swiper
                slidesPerView={6}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // '@0.00': {
                    //     slidesPerView: 1,
                    //     spaceBetween: 1,
                    // },
                    // '@0.75': {
                    //     slidesPerView: 2,
                    //     spaceBetween: 2,
                    // },
                    // '@1.00': {
                    //     slidesPerView: 3,
                    //     spaceBetween: 4,
                    // },
                    // '@1.50': {
                    //     slidesPerView: 4,
                    //     spaceBetween: 5,
                    // },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >







                <SwiperSlide className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                    <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={MovieImage2} alt="" /> <br />
                    <div className="mb-3">
                        <h3 style={{ color: "#ffad00" }}>Adam</h3>
                        <NavLink to="/MovieSee">
                            <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                        </NavLink>
                    </div>
                </SwiperSlide>



                <SwiperSlide className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                    <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={MovieImage3} alt="" /> <br />
                    <div className="mb-3">
                        <h3 style={{ color: "#ffad00" }}>Doctor</h3>
                        <NavLink to="/MovieSee">
                            <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                        </NavLink>
                    </div>
                </SwiperSlide>



                <SwiperSlide className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                    <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={MovieImage4} alt="" /> <br />
                    <div className="mb-3">
                        <h3 style={{ color: "#ffad00" }}>Jurassic</h3>
                        <NavLink to="/MovieSee">
                            <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                        </NavLink>
                    </div>
                </SwiperSlide>



                <SwiperSlide className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                    <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={MovieImage1} alt="" /> <br />
                    <div className="mb-3">
                        <h3 style={{ color: "#ffad00" }}>Alma</h3>
                        <NavLink to="/MovieSee">
                            <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                        </NavLink>
                    </div>
                </SwiperSlide>





                <SwiperSlide className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                    <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={MovieImage2} alt="" /> <br />
                    <div className="mb-3">
                        <h3 style={{ color: "#ffad00" }}>Adam</h3>
                        <NavLink to="/MovieSee">
                            <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                        </NavLink>
                    </div>
                </SwiperSlide>



                <SwiperSlide className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                    <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={MovieImage3} alt="" /> <br />
                    <div className="mb-3">
                        <h3 style={{ color: "#ffad00" }}>Doctor</h3>
                        <NavLink to="/MovieSee">
                            <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                        </NavLink>
                    </div>
                </SwiperSlide>



                <SwiperSlide className='text-center' style={{ border: "1px solid #333", padding: "8px", borderRadius: "10px", margin: "2px", backgroundColor: "#adb5bd8a" }}>
                    <img style={{ width: "120px", height: "150px", borderRadius: "10px" }} src={MovieImage4} alt="" /> <br />
                    <div className="mb-3">
                        <h3 style={{ color: "#ffad00" }}>Jurassic</h3>
                        <NavLink to="/MovieSee">
                            <button className='btn btn-primary'> <i className="fa-regular fa-circle-play fa-beat-fade"></i> Watch Now</button>
                        </NavLink>
                    </div>
                </SwiperSlide>


            </Swiper>
















        </div>


    </>)
}

export default AllMoviesList