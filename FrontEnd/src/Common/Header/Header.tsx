import { useEffect, useState } from "react";
import { MenuDetails } from "../../APIService/APIService.js";
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [Logo, SetLogo] = useState("");
  const [MenuList, SetMenuList] = useState([]);


  useEffect(() => {

    var GetLogo = localStorage.getItem('Logo');
    SetLogo(GetLogo);

    MenuDetails().then((res) => {
      SetMenuList(res.data.data);
    });

  }, []);


  return (
    <div className="navbar-fixed" style={{ backgroundColor: "rgb(62 62 62 / 29%)", position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>


      <div className="container">

        <div className="row" style={{ height: "60px", alignItems: "center" }}>

          <div className="col-md-2">
            <NavLink to="/">
              <img style={{ width: "100%", height: "60px" }} className="img-fluid" src={Logo} alt="Site Logo" />
            </NavLink>
          </div>

          <div className="col-md-5">
            <div className="p-1" style={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: "5px" }}>
              <select className="form-select" aria-label="Default select example" style={{ width: "70px", marginRight: "5px" }}>
                <option defaultValue>All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <input
                placeholder="Search..."
                className="HeaderSearchInput"
                style={{ flex: 1, padding: "5px", borderRadius: "7px", border: "none" }}
                type="text"
              />
              <i className="fa-solid fa-magnifying-glass" style={{ marginRight: "10px" }}></i>
            </div>
          </div>

          <div className="col-md-5" style={{ textAlign: "right", fontWeight: "500" }}>
            <nav>
              {MenuList.map((MenuItem, i) => (
                <NavLink to={`/${MenuItem.MenuPath}`} key={i}>
                  <span className="p-2">{MenuItem.MenuName}</span>
                </NavLink>
              ))}
              <button style={{ backgroundColor: "#ffffff00", border: "none", borderRadius: "50px" }}>
                <select className="form-select" aria-label="Default select example" style={{ width: "70px", marginRight: "5px" }}>
                  <option defaultValue>EN</option>
                  <option value="Bangla">BN</option>
                </select>
              </button>
              <NavLink to="/Profile">
                <span className="p-2"><i className="fa fa-user text-white"></i></span>
              </NavLink>
            </nav>
          </div>

        </div>

      </div>


    </div>
  );
}

export default Header;
