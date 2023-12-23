const ReviewModel = require('../../Model/ReviewModel/ReviewModel');

const { ObjectId } = require('mongoose').Types;

const ReviewService = async (Request) => {
    try {
        const MovieID = new ObjectId(Request.params.MovieID);

        const Review = await ReviewModel.aggregate([
            { $match: { MovieID: MovieID } }, // Match based on MovieID
            {
                $project: {
                    _id: 1,
                    Review: 1,
                    ReviewLength: 1,
                    MovieName: 1,
                    MovieID: '$MovieID', // Project as MovieID
                    UserName: 1,
                    UserID: 1,
                    CreateDate: 1,
                },
            },
        ]);

        return { status: "success", Review: Review };
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
};

module.exports = ReviewService;
