
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Page/LoginReg/LoginReg';
import Registration from '../Page/Registration/Registration';
import WrongRoute from '../Helper/WrongRoute/WrongRoute';
import Home from '../Page/Home/Home';
import MovieSee from '../Page/MovieSee/MovieSee';


const UnAuthenticatedRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="*" element={<WrongRoute />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/MovieSee/:MovieID" element={<MovieSee />} />
    </Routes>
  </BrowserRouter>
  )
}

export default UnAuthenticatedRouter