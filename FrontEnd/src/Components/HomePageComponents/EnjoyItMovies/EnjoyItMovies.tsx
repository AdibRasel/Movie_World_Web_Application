const EnjoyItMovies = () => {

    const ItMovieBgImg = "https://www.blindsgalore.com/blog/wp-content/uploads/2016/10/ImageACreep1.jpg"

    const MovieWatching = "https://img.freepik.com/premium-photo/asian-woman-watching-movie-laptop-night-home-relax-recreation-lifestyle_42957-11626.jpg"

    return (<>

        <div className="hero" style={{ backgroundImage: `url(${ItMovieBgImg})`, width: "100%", minHeight: "500px", maxHeight: "1000px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>


            <div style={{ width: "100%", minHeight: "500px", maxHeight: "1000px", backgroundColor: "rgb(113 77 0 / 71%)" }}>

                <div className="container row" style={{ width: "80%", margin: "auto" }}>

                    <div className="col-md-6 text-center pt-5" style={{marginTop:"100px"}}>

                        <h1>
                            <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>ENJOY IT </span>
                            <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}>MOVIES</span>
                        </h1>
                        <p style={{textAlign:"justify", color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt soluta iste nisi tenetur cupiditate placeat, obcaecati ut velit iusto nesciunt. Eum est fuga tenetur dolores expedita porro ipsum, vitae deleniti earum cum dolore recusandae praesentium in id a perspiciatis aliquid. Aperiam quod excepturi nisi dolore enim quis odit alias.</p>

                        <button className="btn btn-primary">WATCH NOW  <i className="fa-solid fa-play fa-beat"></i> </button>

                    </div>

                    <div className="col-md-6" style={{ color: "rgb(255 173 0)", zIndex: 100, paddingTop: "100px" }}>
                     
                        <img className="img-fluid" src={MovieWatching} alt="" />

                    </div>

                </div>

            </div>



        </div>


    </>)
}

export default EnjoyItMovies