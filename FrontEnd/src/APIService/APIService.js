import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1"

// DashBoard Details
export async function DashBoardDetails() {
    try {
        const URL = BaseURL + "/DashBoardDetails";
        const res = await axios.get(URL);
        if (res.data.status == "Success") {
            return res;
        } else {
            console.log("Error in response");
            return null;
        }
    } catch (e) {
        console.error("Error:", e);
        return null;
    }
}

// Menu Details
export async function MenuDetails() {
    try {
        const URL = BaseURL + "/HeaderDetails";
        const res = await axios.get(URL);
        if (res.data.status == "Success") {
            return res;
        } else {
            console.log("Error in response");
            return null;
        }
    } catch (e) {
        console.error("Error:", e);
        return null;
    }
}