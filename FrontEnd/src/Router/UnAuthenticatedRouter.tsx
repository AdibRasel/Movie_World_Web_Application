
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Page/Login/Login';
import Registration from '../Page/Registration/Registration';
import WrongRoute from '../Helper/WrongRoute/WrongRoute';
import Home from '../Page/Home/Home';


const UnAuthenticatedRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="*" element={<WrongRoute />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default UnAuthenticatedRouter