const CreateToken = require("../../Utility/CreateToken")



const OfficeLogin = async (Request, DataModel) => {
    try {

        let data = await DataModel.aggregate(
            [
                { $match: Request.body },
                {
                    $project:
                        { _id: 0, OfficeEmail: 1, OfficeName: 1, FirstName: 1, LastName: 1, Address: 1, Mobile: 1, Password: 1, Photo: 1, CreateDate: 1 }
                }
            ]
        )

        if (data.length > 0) {

            const Email = data[0]["OfficeEmail"];
            const Password = data[0]["Password"]

            let Token = await CreateToken(Email, Password)

            return { status: "Success", data: data[0], Token: Token}

        } else {
            return { status: "Unauthorized" }
        }

    } catch (error) {
        return { status: "fail", data: error.toString() }
    }
}
module.exports = OfficeLogin