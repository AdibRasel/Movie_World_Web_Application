import React, { useState } from 'react';

const MovieSeeComponents = () => {
    const backgroundImage = 'https://t4.ftcdn.net/jpg/02/34/98/73/360_F_234987365_1bwmHyUjVOKIibWEbnwaayE9FQiq2xpu.jpg';

    const movieBgImg = 'https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvZGVhZjJlNDktMDk0Ni00YmFlLTk5NmEtYmVmYzJkNjAyYmExLjEzYTM4MGNjM2ZkOTA2ZTNkOTE4ZTY3YjU5M2UxMzhhLmpwZWc.jpg';

    const [reviewValue, setReviewValue] = useState(0);
    const [reviews, setReviews] = useState([]);

    const handleRatingChange = (value) => {
        setReviewValue(value);
    };

    const handleAddReview = () => {
        if (reviewValue > 0) {
            const newReview = {
                id: Date.now(),
                rating: reviewValue,
                personName: 'John Doe',
                reviewText: '',
            };

            setReviews([...reviews, newReview]);
            setReviewValue(0);
        }
    };

    return (
        <>
            <div
                className="s"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    width: '100%',
                    minHeight: '500px',
                    maxHeight: '1000px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#7E635A',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="container" style={{ paddingTop: '100px' }}>
                    <div className="row text-white">

                        <div className="col-md-4">
                            <img src={movieBgImg} className="img-fluid" style={{ width: '100%', height: '300px' }} alt="" />
                            <p className="pt-3">EPISODES <span>121</span></p>
                            <p>VIDEOS <span>24</span> </p>
                            <p>PHOTOS <span>85</span> </p>
                        </div>

                        <div className="col-md-7">
                            <div>
                                <iframe
                                    width="713"
                                    height="401"
                                    src="https://www.youtube.com/embed/7wRqAtUcD68"
                                    title="Bandit Movie Explain in Bangla | Heist | Action | Crime | Robbery | Cineplex52"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                    </div>

                    <div className="row text-white">

                        <div className="col-md-4">
                            <div>
                                <h2>Your Review</h2>
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
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <button className="btn btn-primary my-3" onClick={handleAddReview}>
                                    Submit Now
                                </button>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <p>Bandit Movie Explain in Bangla | Heist | Action | Crime | Robbery | Cineplex52</p>
                            <p>Creators: <span>Julie Pleckevin Williamson </span></p>
                            <p>Stars: <span>Nine DoverevPa Wesleylan Somerhaldr </span></p>
                            <h2>All Reviews</h2>
                            <ul>
                                {reviews.map((review) => (
                                    <li key={review.id}>
                                        <span style={{color: '#ffc83d'}}>{'★'.repeat(review.rating)}</span>
                                        <span> {review.personName}</span>
                                        <p>{review.reviewText}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieSeeComponents;
