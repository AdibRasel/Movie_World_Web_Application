import { useEffect, useState } from "react";
import { MenuDetails } from "../../APIService/APIService.js";
import { NavLink } from 'react-router-dom';

const DashboardHeader = () => {

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
                        <NavLink to="/Dashboard">
                            <img style={{ width: "100%", height: "60px" }} className="img-fluid" src={Logo} alt="Site Logo" />
                        </NavLink>
                    </div>

                    <div className="col-md-6">
                        <div className="p-1" style={{ display: "flex", alignItems: "center", backgroundColor: "#495057ab", borderRadius: "5px" }}>
                            <nav>
                                <NavLink to="/Dashboard">
                                    <span className="p-2">Dashboard</span>
                                </NavLink>
                                <NavLink to="/GetPro">
                                    <span className="p-2">Hollywood Movies</span>
                                </NavLink>
                                <NavLink to="WatchList">
                                    <span className="p-2">Bollywood Movies</span>
                                </NavLink>
                                <NavLink to="WatchList">
                                    <span className="p-2">Profile</span>
                                </NavLink>
                            </nav>

                        </div>
                    </div>

                    <div className="col-md-4" style={{ textAlign: "right", fontWeight: "500" }}>
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
                            <span className="p-2"><i className="fa fa-user text-white"></i></span>
                        </nav>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default DashboardHeader;
