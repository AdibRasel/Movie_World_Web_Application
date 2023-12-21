import React from 'react'
import UpcomingMoviesList from './UpcomingMoviesList'

const UpcomingMovies = () => {

    const UpcomingBgImg = "https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg"

    return (<>



        <div className="hero" style={{ backgroundImage: `url(${UpcomingBgImg})`, width: "100%", height: "450px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

            <div className="UpcomingMovie" style={{ width: "100%", height: "100%", backgroundColor: "rgb(255 173 0 / 35%)" }}>


                <div className="text-center pt-5">
                    <h1><span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>UPCOMING</span> <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}>MOVIES</span></h1>
                    <p className='text-white'>We constantly offers new movies</p>
                </div>

                <div style={{width:"100%", height: "100%"}}>


                    <UpcomingMoviesList />

                </div>

            </div>
        </div>






    </>)
}

export default UpcomingMovies