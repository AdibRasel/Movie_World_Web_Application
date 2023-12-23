// import MoviesYouRatedList from "./MoviesYouRatedList"
// import YourWatchList from "./YourWatchList"

import AllMoviesList from "./AllMoviesList"
import BollywoodMoviesList from "./BollywoodMoviesList"
import HollywoodMoviesList from "./HollywoodMoviesList"

const AllMovies = () => {

    const ItMovieBgImg = "https://www.indiewire.com/wp-content/uploads/2017/10/1600x794_slider_assassination.jpg"

    const MovieWatching = "https://img.freepik.com/premium-photo/asian-woman-watching-movie-laptop-night-home-relax-recreation-lifestyle_42957-11626.jpg"

    return (<>

        <div className="hero" style={{ backgroundImage: `url(${ItMovieBgImg})`, width: "100%", minHeight: "500px", maxHeight: "1000px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>


            <div style={{ paddingBottom: "10px", width: "100%", minHeight: "500px", maxHeight: "1000px", backgroundColor: "#ffc1076b" }}>


                <div className="container">

                    <h1 className="text-left pt-5">
                        <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>All  </span>
                        <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> MOVIES</span>
                    </h1>




                    <AllMoviesList />

                    <div className="row">

                        <div className="col-md-6">
                            <h1 className="text-center">
                                <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>Hollywood </span>
                                <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> Movies</span>
                            </h1>
                            <HollywoodMoviesList />
                        </div>

                        <div className="col-md-6">
                            <h1 className="text-center">
                                <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>Bollywood  </span>
                                <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> Movies</span>
                            </h1>
                            <BollywoodMoviesList />
                        </div>
                    </div>


                </div>

            </div>




        </div>


    </>)
}

export default AllMovies