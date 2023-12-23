const { ObjectId } = require('mongoose').Types;

const MovieFullDetailsService = async (Request, HollywoodMovie, BollywoodMovie) => {
    try {
        const movieId = new ObjectId(Request.params.MovieID);

        const HollywoodMovieData = await HollywoodMovie.aggregate([
            { $match: { _id: movieId } },
            {
                $project: {
                    _id: 1,
                    MovieName: 1,
                    MovieDescription: 1,
                    MovieThumbnail: 1,
                    FullEmbedCode: 1,
                    EmbedCode: 1,
                    MovieReviewsID: 1,
                    OfficeID: 1,
                    CreateDate: 1,
                },
            },
        ]);

        const BollywoodMovieData = await BollywoodMovie.aggregate([
            { $match: { _id: movieId } },
            {
                $project: {
                    _id: 1,
                    MovieName: 1,
                    MovieDescription: 1,
                    MovieThumbnail: 1,
                    FullEmbedCode: 1,
                    EmbedCode: 1,
                    MovieReviewsID: 1,
                    OfficeID: 1,
                    CreateDate: 1,
                },
            },
        ]);

        return { status: "success", HollywoodMovieData, BollywoodMovieData, ID: Request.params.MovieID };
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
};

module.exports = MovieFullDetailsService;
