const CreateToken = require("../../Utility/CreateToken")



const SuperAdminLogin = async (Request, DataModel) => {
    try {

        let data = await DataModel.aggregate(
            [
                { $match: Request.body },
                // { $match: Request.body.OfficeEmail },
                { $match: { SuperAdminEmail: Request.body.SuperAdminEmail } },
                { $match: { Password: Request.body.Password } },
                {
                    $project:
                        { _id: 1, SuperAdminEmail: 1, SuperAdminName: 1, Mobile: 1, Photo: 1, CreateDate: 1 }
                }
            ]
        )

        if (data.length > 0) {

            const Email = data[0]["SuperAdminEmail"];
            const Password = data[0]["Password"]

            let Token = await CreateToken(Email, Password)

            return { status: "Success", data: data[0], Token: Token }

        } else {
            return { status: "Unauthorized" }
        }

    } catch (error) {
        return { status: "fail", data: error.toString() }
    }
}
module.exports = SuperAdminLogin