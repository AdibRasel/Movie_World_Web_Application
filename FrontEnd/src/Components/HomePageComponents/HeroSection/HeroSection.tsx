import WatchNow from "../WatchNow/WatchNow";

const HeroSection = () => {
    const HeroBgImg = "https://media.glamour.com/photos/56957a138fa134644ec21f46/master/pass/entertainment-2014-02-03-titanic-main.jpg";

    return (
        <>
            <div className="hero" style={{ backgroundImage: `url(${HeroBgImg})`, width: "100%", height: "500px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>


                <div className="container" style={{ width: "100%", height: "100%", backgroundColor: "rgb(67 71 69 / 85%)" }}>

                    <div className="row">
                        <div className="col-md-6">

                            <h1 style={{color:"rgb(255 173 0)", fontWeight:"bold", paddingTop:"150px"}} className="">{localStorage.getItem('Title')}</h1>

                            <h2 style={{color:"white"}}>{localStorage.getItem('Title_One')}</h2>
                            <h2 style={{color:"#0d6efd"}}>{localStorage.getItem('Title_Two')}</h2>

                        </div>

                        <div className="col-md-6" style={{color:"rgb(255 173 0)", zIndex: 100, paddingTop: "100px" }}>
                            <WatchNow />
                        </div>

                    </div>

                </div>



            </div>
        </>
    );
}

export default HeroSection;
