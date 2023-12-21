import Footer from "../../Common/Footer/Footer"
import Header from "../../Common/Header/Header"
import AllMovies from "../../Components/HomePageComponents/AllMovies/AllMovies"
import EnjoyItMovies from "../../Components/HomePageComponents/EnjoyItMovies/EnjoyItMovies"
import HeroSection from "../../Components/HomePageComponents/HeroSection/HeroSection"
import MoviesYouRated from "../../Components/HomePageComponents/MoviesYouRated/MoviesYouRated"
import UpcomingMovies from "../../Components/HomePageComponents/UpcomingMovies/UpcomingMovies"
import YourWatch from "../../Components/HomePageComponents/YourWatchList/YourWatch"

const Home = () => {
    return (<>

        <Header />

        <HeroSection />

        <AllMovies />

        <UpcomingMovies />

        <EnjoyItMovies />

        <MoviesYouRated />

        <YourWatch />

        <Footer />

        


    </>)
}

export default Home