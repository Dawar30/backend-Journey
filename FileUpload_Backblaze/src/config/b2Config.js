import B2 from "backblaze-b2";
import dotenv from "dotenv"
dotenv.config()

const b2 = new B2({
    applicationKeyId: process.env.b2_keyID,
    applicationKey: process.env.applicationKey
})

export default b2

