import React, { useEffect, useRef, useState } from 'react';
import AllMovies from '../HomePageComponents/AllMovies/AllMovies';
import UpcomingMovies from '../HomePageComponents/UpcomingMovies/UpcomingMovies';
import { FullMovieMoviesDetails, ReviewCreate, ReviewSee } from "../../APIService/APIService.js";
import { useParams } from 'react-router-dom';



const MovieSeeComponents = () => {
    const backgroundImage = 'https://t4.ftcdn.net/jpg/02/34/98/73/360_F_234987365_1bwmHyUjVOKIibWEbnwaayE9FQiq2xpu.jpg';

    const movieBgImg = 'https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvZGVhZjJlNDktMDk0Ni00YmFlLTk5NmEtYmVmYzJkNjAyYmExLjEzYTM4MGNjM2ZkOTA2ZTNkOTE4ZTY3YjU5M2UxMzhhLmpwZWc.jpg';

    const UserIcon = "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"

    const { MovieID } = useParams();

    const ReviewRef = useRef();
    const [reviewValue, setReviewValue] = useState(0);
    const [reviews, setReviews] = useState([]);

    const handleRatingChange = (value) => {
        setReviewValue(value);
    };





    const [MovieDetails, SetMovieDetails] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await FullMovieMoviesDetails(MovieID);
                if (response.data.HollywoodMovieData[0]) {
                    SetMovieDetails(response.data.HollywoodMovieData[0])
                } else if (response.data.BollywoodMovieData[0]) {
                    SetMovieDetails(response.data.BollywoodMovieData[0])
                }

                console.log(response)
            } catch (error) {
                console.error("Read Failed, Request Failed! API Service > Try > Catch", error);
            }
        };


        const fetchReviewData = async () => {
            try {
                const responseReviewSee = await ReviewSee(MovieID);
                const newReview = {
                    id: Date.now(),
                    rating: responseReviewSee.data.Review[0].ReviewLength,
                    personName: responseReviewSee.data.Review[0].UserName,
                    reviewText: responseReviewSee.data.Review[0].Review,
                };

                setReviews([...reviews, newReview]);

                console.log("responseReviewSee")
                console.log(responseReviewSee)
            } catch (error) {
                console.error("Read Failed, Request Failed! API Service > Try > Catch", error);
            }
        };





        fetchReviewData()
        fetchData();
    }, []);




    const handleAddReview = () => {

        if (reviewValue > 0) {
            const newReview = {
                id: Date.now(),
                rating: reviewValue,
                personName: localStorage.getItem('UserEmail') || localStorage.getItem('OfficeName') || localStorage.getItem('SuperAdminName'),
                reviewText: ReviewRef.current.value, // Use ReviewRef.current.value to get the textarea value
            };

            setReviews([...reviews, newReview]);
            setReviewValue(0);
        }

        const ReviewValue = ReviewRef.current.value

        let PostBody = {
            Review: ReviewValue,
            ReviewLength: reviewValue,
            MovieName: MovieDetails.MovieName,
            MovieID: MovieID,
            UserID: localStorage.getItem('UserID'),
            UserName: localStorage.getItem('UserEmail') || localStorage.getItem('OfficeName') || localStorage.getItem('SuperAdminName'),
        };
        ReviewCreate(PostBody).then((Res) => {
            console.log(Res)
            alert("Success")
        });

    };




    return (
        <>
            <div className="s" style={{
                backgroundImage: `url(${backgroundImage})`,
                width: '100%',
                minHeight: 'auto',
                maxHeight: 'auto',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#7E635A',
                backgroundRepeat: 'no-repeat',
                paddingBottom: "15px"
            }}>
                <div className="container" style={{ paddingTop: '100px' }}>
                    <div className="row text-white">

                        <div className="col-md-4">
                            <img src={MovieDetails.MovieThumbnail} className="img-fluid" style={{ width: '100%', height: '300px' }} alt="" />
                            <p className="pt-3">EPISODES <span></span></p>
                            <p>VIDEOS <span></span> </p>
                            <p>PHOTOS <span></span> </p>
                        </div>

                        <div className="col-md-7">
                            <div className='pt-3' dangerouslySetInnerHTML={{ __html: MovieDetails.FullEmbedCode }} />
                        </div>

                    </div>

                    <div className="row text-white">

                        <div className="col-md-4">
                            <div>
                                <h3>Your Review</h3>
                                <div>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            style={{ cursor: 'pointer', marginRight: '5px', fontSize: '25px', color: '#ffc83d' }}
                                            onClick={() => handleRatingChange(star)}
                                        >
                                            {star <= reviewValue ? '★' : '☆'}
                                        </span>
                                    ))}
                                </div>
                                <textarea ref={ReviewRef} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <button className="btn btn-primary my-3" onClick={handleAddReview}>
                                    Submit Now
                                </button>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <h2>{MovieDetails.MovieName}</h2>
                            <p>{MovieDetails.MovieDescription}</p>
                            <h3>All Reviews</h3>
                            <div>
                                {reviews.map((review) => (
                                    <div key={review.id} className="text-center mb-2" style={{ backgroundColor: "rgb(0 119 204 / 30%)", borderRadius: "10px" }}>
                                        <div className="mb-2" style={{ backgroundColor: "rgb(0 119 204)" }}>
                                            <span style={{ color: '#ffc83d', fontSize: '25px' }}>{'★'.repeat(review.rating)}</span>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src={UserIcon} style={{ width: "100px", height: "100px", borderRadius: "50%" }} alt="" />
                                                <br />
                                                <span> {review.personName}</span>
                                            </div>
                                            <div className="col-md-8">
                                                <p>{review.reviewText}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* <div className="text-center" style={{ backgroundColor: "rgb(0 119 204 / 30%)" }}>
                                    <div className="mb-2" style={{ backgroundColor: "rgb(0 119 204)" }}>
                                        <span style={{ color: '#ffc83d' }}>{'★'.repeat(review.rating)}</span>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={UserIcon} style={{ width: "100px", height: "100px", borderRadius: "50%" }} alt="" />
                                            <span> {review.personName}</span>
                                        </div>
                                        <div className="col-md-8">
                                            <p>{review.reviewText}</p>
                                        </div>
                                    </div>
                                </div> */}



                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <AllMovies />

            <UpcomingMovies />

        </>
    );
};

export default MovieSeeComponents;
