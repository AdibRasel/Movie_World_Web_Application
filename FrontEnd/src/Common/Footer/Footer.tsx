import React from 'react'

const Footer = () => {
    // const Logo = localStorage.getItem('Logo');
    const Logo = "https://logos-world.net/wp-content/uploads/2022/06/CMovies-Logo.png";
    return (<>

        <div className="bg-black">

            <div className="container">
                <div className="row text-white p-5">
                    <div className="col-md-4">
                        <h4>UPCOMING MOVIES</h4>
                        <ul>
                            <li>Jawan</li>
                            <li>The Vampire Diaries</li>
                            <li>Baribe</li>
                            <li>Teen All</li>
                            <li>NCIS</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>ADDITIONAL PAGES</h4>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className="col-md-4">
                        <img style={{width:"150px", height:"100px"}} src={Logo} alt="" />
                        <p>@2023 moviehd.com. All Right Reserved. This site is not affiliated or owned by the listed movie streaming platform owners.</p>
                    </div>
                </div>
            </div>
            <hr style={{borderBottom:"1px solid white"}} />
            <div className="container p-5 text-white text-center">
                <span>Copyright @ 2023 moviehd ALL Right Reserved</span>
            </div>


        </div>




    </>)
}

export default Footer