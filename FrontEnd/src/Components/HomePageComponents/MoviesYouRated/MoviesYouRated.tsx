const MoviesYouRated = () => {

    const ItMovieBgImg = "https://mmc.tirto.id/image/otf/500x0/2019/09/27/ilustrasi-clapperboard-istock--3_ratio-16x9.jpg"

    const MovieWatching = "https://img.freepik.com/premium-photo/asian-woman-watching-movie-laptop-night-home-relax-recreation-lifestyle_42957-11626.jpg"

    return (<>

        <div className="hero" style={{ backgroundImage: `url(${ItMovieBgImg})`, width: "100%", minHeight: "500px", maxHeight: "1000px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>


            <div style={{ width: "100%", minHeight: "500px", maxHeight: "1000px", backgroundColor: "#181818ba" }}>


                    <h1 className="text-center pt-5">
                        <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>MOVIES </span>
                        <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> YOU RATED</span>
                    </h1>



            </div>



        </div>


    </>)
}

export default MoviesYouRated