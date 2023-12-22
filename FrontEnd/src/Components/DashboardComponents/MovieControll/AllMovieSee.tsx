import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const AllMovieSee = () => {

  const AllMovieImg = "https://hips.hearstapps.com/hmg-prod/images/summer-movies-1587392939.jpg";
  const BollywoodMovieImg = "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/nature-3047449_1280-sixteen_nine.jpg";
  const HollywoodMovieImg = "https://rnz-ressh.cloudinary.com/image/upload/s--CJWLZfwW--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1683003652/4NP40PU_Hollywood_jpg";
  const OfficeImg = "https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1.jpg";
  const UserImg = "https://t4.ftcdn.net/jpg/03/23/30/91/360_F_323309190_FwaLnwQ0tfL6TZbtvrja2rWXeVp6okGu.jpg";



  return (<>

    <div style={{ paddingTop: "60px", paddingBottom: "10px" }}>

      <div className="bg-primary">
        <div className="container">
          <span style={{ color: "white", fontWeight: "bold", textAlign: "left", fontSize: "25px" }}>All Movie</span>
          <span style={{ color: "rgb(255 173 0)", fontWeight: "bold", textAlign: "right", fontSize: "25px" }}> 158</span>
        </div>
      </div>


      <div className="container">


        <div className="row pt-2">
          <div className="col-md-3">
            <div className="text-center" style={{ width: "100%", height: "100%", border: "dotted", backgroundColor: "rgb(197 197 197)", }}>
              <NavLink to="/AddMovie">
                <button className='btn btn-primary mt-3'><i className="fa-solid fa-plus"></i> Add More</button>
              </NavLink>
            </div>
          </div>
          <div className="col-md-3">
            <Card className='text-center' style={{ width: '18rem' }}>
              <Card.Img variant="top" style={{ width: "100%", height: "150px" }} src={AllMovieImg} />
              <Card.Body>
                <Card.Title>
                  <span style={{ color: "rgb(255 173 0)", fontWeight: "bold" }}>Movies Name</span>
                </Card.Title>
                <Card.Text className='text-left'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Delete <i className="fa-solid fa-trash"></i></Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">

          </div>
          <div className="col-md-3">

          </div>
        </div>


      </div>



    </div>



  </>)
}

export default AllMovieSee