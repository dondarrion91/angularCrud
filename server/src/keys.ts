import * as dotenv from "dotenv";

dotenv.config({
    path: 'variables.env'
});

export default{
    database: {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_NOMBRE
    }
}