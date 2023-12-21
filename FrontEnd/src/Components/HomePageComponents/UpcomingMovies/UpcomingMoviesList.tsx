// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';





const UpcomingMoviesList = () => {

    const MovieImage1 = "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    const MovieImage2 = "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
    const MovieImage3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswCANXHaSMwCJFbNrIvfFT9qIVxNkvSpoTA&usqp=CAU"
    const MovieImage4 = "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"


    // import MovieImage1 from "../../assets/img/sample/avatar/avatar1.jpg"
    // import MovieImage2 from "../../assets/img/sample/avatar/avatar2.jpg"
    // import MovieImage3 from "../../assets/img/sample/avatar/avatar3.jpg"
    // import MovieImage4 from "../../assets/img/sample/avatar/avatar4.jpg"
    // import MovieImage1 from "../../assets/img/sample/avatar/avatar5.jpg"
    // import MovieImage2 from "../../assets/img/sample/avatar/avatar6.jpg"
    // import MovieImage3 from "../../assets/img/sample/avatar/avatar7.jpg"
    // import MovieImage4 from "../../assets/img/sample/avatar/avatar8.jpg"
    // import MovieImage1 from "../../assets/img/sample/avatar/avatar9.jpg"

    return (
        <div className='HomeSendMoney'>




            {/* title start  */}
            {/* <div className="HomeTransactionsHeading">
                <span className='HomeTransactionsHeadingTitle'>Send Money</span>
                <span className='HomeTransactionsHeadingView'>Add New</span>
            </div> */}
            {/* title end  */}










            <Swiper
                slidesPerView={5}
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



                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage1} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Jurassic</h2>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage2} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Adam</h2>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage3} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Doctor</h2>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage4} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Jurassic</h2>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage1} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Jurassic</h2>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage2} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Adam</h2>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage3} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Doctor</h2>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage4} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Jurassic</h2>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img style={{width:"150px", height:"200px"}} src={MovieImage1} alt="" /> <br />
                    <h2 style={{color:"#ffad00"}}>Alma</h2>
                </SwiperSlide>
            </Swiper>









        </div>
    )
}

export default UpcomingMoviesList