import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home/Home';
import WrongRoute from '../Helper/WrongRoute/WrongRoute';
import Movies from '../Page/Movies/Movies';
import GetPro from '../Page/GetPro/GetPro';
import WatchList from '../Page/WatchList/WatchList';
import MovieSee from '../Page/MovieSee/MovieSee';

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
            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter