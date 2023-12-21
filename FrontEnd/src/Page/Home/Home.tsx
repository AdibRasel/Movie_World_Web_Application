import Header from "../../Common/Header/Header"
import EnjoyItMovies from "../../Components/HomePageComponents/EnjoyItMovies/EnjoyItMovies"
import HeroSection from "../../Components/HomePageComponents/HeroSection/HeroSection"
import MoviesYouRated from "../../Components/HomePageComponents/MoviesYouRated/MoviesYouRated"
import UpcomingMovies from "../../Components/HomePageComponents/UpcomingMovies/UpcomingMovies"

const Home = () => {
    return (<>

        <Header />

        <HeroSection />

        <UpcomingMovies />

        <EnjoyItMovies />

        <MoviesYouRated />

        


    </>)
}

export default Home