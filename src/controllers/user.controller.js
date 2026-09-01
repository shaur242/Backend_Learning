import { asyncHandler } from "../utils/asyncHandler.js"


const registerUser = asyncHandler( async(req, res)=>{
    res.status(200).json({
        messgae: "Chai Aur Code"
    })
} )

export {registerUser}