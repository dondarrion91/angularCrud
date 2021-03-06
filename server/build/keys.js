"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config({
    path: 'variables.env'
});
exports.default = {
    database: {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_NOMBRE
    }
};
