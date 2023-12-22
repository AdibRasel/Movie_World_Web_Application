import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home/Home';
import WrongRoute from '../Helper/WrongRoute/WrongRoute';
import Movies from '../Page/Movies/Movies';
import GetPro from '../Page/GetPro/GetPro';
import WatchList from '../Page/WatchList/WatchList';
import MovieSee from '../Page/MovieSee/MovieSee';
import Dashboard from '../Page/Dashboard/Dashboard';
import AllMovieSeePage from '../Page/Dashboard/MovieControll/AllMovieSeePage';
import AllHollywoodMovie from '../Page/Dashboard/MovieControll/AllHollywoodMovie';
import AllBollywoodMovie from '../Page/Dashboard/MovieControll/AllBollywoodMovie';
import AddMovie from '../Page/AddMovie/AddMovie';

const AuthenticationRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<WrongRoute />} />
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/GetPro" element={<GetPro />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/WatchList" element={<WatchList />} />
                <Route path="/MovieSee" element={<MovieSee />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/AllMovieSee" element={<AllMovieSeePage />} />
                <Route path="/AllHollywoodMovie" element={<AllHollywoodMovie />} />
                <Route path="/AllBollywoodMovie" element={<AllBollywoodMovie />} />
                <Route path="/AddMovie" element={<AddMovie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter