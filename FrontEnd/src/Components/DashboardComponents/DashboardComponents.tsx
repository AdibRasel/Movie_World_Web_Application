import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DashboardComponents = () => {

    const role = "SuperAdmin";

    const AllMovieImg = "https://hips.hearstapps.com/hmg-prod/images/summer-movies-1587392939.jpg";
    const BollywoodMovieImg = "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/nature-3047449_1280-sixteen_nine.jpg";
    const HollywoodMovieImg = "https://rnz-ressh.cloudinary.com/image/upload/s--CJWLZfwW--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1683003652/4NP40PU_Hollywood_jpg";
    const OfficeImg = "https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1.jpg";
    const UserImg = "https://t4.ftcdn.net/jpg/03/23/30/91/360_F_323309190_FwaLnwQ0tfL6TZbtvrja2rWXeVp6okGu.jpg";
    const PendingImage = "https://st2.depositphotos.com/1552219/9595/i/450/depositphotos_95957072-stock-photo-pending-stamp-sign.jpg"


    return (
        <div style={{ paddingTop: "80px" }}>

            <div className="container">


                {role === "SuperAdmin" && (
                    <div className="row py-3" style={{ textAlign: "-webkit-center" }}>
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ width: "100%", height: "150px" }} src={PendingImage} />
                                <Card.Body>
                                    <Card.Title>
                                        <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>Pending Movie</span>
                                        <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> 17</span>
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">See All <i className="fa-regular fa-eye"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 ">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ width: "100%", height: "150px" }} src={UserImg} />
                                <Card.Body>
                                    <Card.Title>
                                        <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>All User </span>
                                        <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> 59,589</span>
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">See All <i class="fa-regular fa-eye"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ width: "100%", height: "150px" }} src={OfficeImg} />
                                <Card.Body>
                                    <Card.Title>
                                        <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>Office User</span>
                                        <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> 158</span>
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">See All <i className="fa-regular fa-eye"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                )}


                <div className="row pb-2" style={{ textAlign: "-webkit-center" }}>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: "100%", height: "150px" }} src={AllMovieImg} />
                            <Card.Body>
                                <Card.Title>
                                    <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>All Movies </span>
                                    <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> 2,159</span>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">See All <i class="fa-regular fa-eye"></i></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: "100%", height: "150px" }} src={BollywoodMovieImg} />
                            <Card.Body>
                                <Card.Title>
                                    <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>Hollywood Movies</span>
                                    <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> 1,079 </span>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">See All <i class="fa-regular fa-eye"></i></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: "100%", height: "150px" }} src={HollywoodMovieImg} />
                            <Card.Body>
                                <Card.Title>
                                    <span style={{ color: "rgb(13 110 253)", fontWeight: "bold" }}>Bollywood Movies</span>
                                    <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}> 1,80</span>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">See All <i class="fa-regular fa-eye"></i></Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>



            </div>

        </div>
    );
};

export default DashboardComponents;
