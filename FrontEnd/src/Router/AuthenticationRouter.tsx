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
import Profile from '../Page/Profile/Profile';
import { useEffect } from 'react';

import { DashBoardDetails } from "../APIService/APIService.js"

const AuthenticationRouter = () => {



    useEffect(() => {

        DashBoardDetails().then((res) => {


            const Logo = res.data.data[0].Logo;
            const Title = res.data.data[0].Title;
            const Title_One = res.data.data[0].Title_One;
            const Title_Two = res.data.data[0].Title_Two;
            const Title_Three = res.data.data[0].Title_Three;
            const Title_Four = res.data.data[0].Title_Four;
            const Title_Five = res.data.data[0].Title_Five;
            const Section_One = res.data.data[0].Section_One;
            const Section_Two = res.data.data[0].Section_Two;
            const Section_Three = res.data.data[0].Section_Three;
            const Section_Four = res.data.data[0].Section_Four;
            const Section_Five = res.data.data[0].Section_Five;

            localStorage.setItem('Logo', Logo);
            localStorage.setItem('Title', Title);
            localStorage.setItem('Title_One', Title_One);
            localStorage.setItem('Title_Two', Title_Two);
            localStorage.setItem('Title_Three', Title_Three);
            localStorage.setItem('Title_Four', Title_Four);
            localStorage.setItem('Title_Five', Title_Five);
            localStorage.setItem('Section_One', Section_One);
            localStorage.setItem('Section_Two', Section_Two);
            localStorage.setItem('Section_Three', Section_Three);
            localStorage.setItem('Section_Four', Section_Four);
            localStorage.setItem('Section_Five', Section_Five);

        });


    }, []);



    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<WrongRoute />} />
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/GetPro" element={<GetPro />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/WatchList" element={<WatchList />} />
                <Route path="/MovieSee/:MovieID" element={<MovieSee />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/AllMovieSee" element={<AllMovieSeePage />} />
                <Route path="/AllHollywoodMovie" element={<AllHollywoodMovie />} />
                <Route path="/AllBollywoodMovie" element={<AllBollywoodMovie />} />
                <Route path="/AddMovie" element={<AddMovie />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter