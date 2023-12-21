// import MoviesYouRatedList from "./MoviesYouRatedList"
import YourWatchList from "./YourWatchList"

const YourWatch = () => {

    const ItMovieBgImg = "https://st.depositphotos.com/2228340/2397/i/450/depositphotos_23970617-stock-photo-movie-night-special-reels.jpg"

    const MovieWatching = "https://img.freepik.com/premium-photo/asian-woman-watching-movie-laptop-night-home-relax-recreation-lifestyle_42957-11626.jpg"

    return (<>

        <div className="hero" style={{ backgroundImage: `url(${ItMovieBgImg})`, width: "100%", minHeight: "500px", maxHeight: "1000px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>


            <div style={{paddingBottom:"10px", width: "100%", minHeight: "500px", maxHeight: "1000px", backgroundColor: "#481818ba" }}>


                <div className="container">

                    <h1 className="text-left pt-5">
                        <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>YOUR  </span>
                        <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> WATCH-LIST</span>
                    </h1>

                    <YourWatchList />

                </div>

            </div>




        </div>


    </>)
}

export default YourWatch