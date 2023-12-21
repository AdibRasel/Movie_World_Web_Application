import { useEffect, useState } from "react";
import { MenuDetails } from "../../APIService/APIService.js"
import { NavLink } from 'react-router-dom';

const Header = () => {


    const [Logo, SetLogo] = useState("");
    const [MenuList, SetMenuList] = useState([]);

    useEffect(() => {


        var GetLogo = localStorage.getItem('Logo');

        SetLogo(GetLogo)

        MenuDetails().then((res) => {

            SetMenuList(res.data.data)

            console.log(res)

        });
    }, []);



    return (<>

        <div className="" style={{ backgroundColor: "rgb(62 62 62 / 29%)" }}>


            <div className="container">

                <div className="row" style={{ width: "100%", height: "60px", alignItems: "center" }}>


                    {/* logo start  */}
                    <div className="col-md-2"><img style={{ width: "100%", height: "60px" }} className="img-fluid" src={`${Logo}`} alt="Site Logo" /></div>
                    {/* logo end  */}



                    {/* search box start */}
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
                    {/* search box end */}


                    {/* menu start  */}
                    <div className="col-md-5" style={{ textAlign: "right", fontWeight: "500" }}>

                        <nav>


                            {MenuList.map((MenuItem, i) => (

                                <>

                                    <NavLink to={`/${MenuItem.MenuPath}`} key={i}>
                                        <span className="p-2">{MenuItem.MenuName}</span>
                                    </NavLink>
                                </>

                            ))}




                            <button style={{ backgroundColor: "#ffffff00", border: "none" }}>
                                <select className="form-select" aria-label="Default select example" style={{ width: "70px", marginRight: "5px", borderRadius:"50px" }}>
                                    <option defaultValue>EN</option>
                                    <option value="Bangla">BN</option>
                                </select>
                            </button>
                            {/* </div> */}


                            <span className="p-2"><i className="fa fa-user text-white"></i></span>

                        </nav>

                    </div>
                    {/* menu end  */}


                </div>
            </div>

        </div >



    </>)
}

export default Header