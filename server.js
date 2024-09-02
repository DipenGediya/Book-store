require("dotenv").config()
let http = require("http");
let express = require("express");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
let cors=require("cors")
let staticRoute = require("./routes/static.route")

let app = express();

//for cross platform
app.use(cors());

//for json body
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(cookieParser())

app.set("view engine","ejs")
app.use("/",staticRoute)

app.use("/v1",routes)

// database connected
dbConnect()

http.createServer(app).listen(process.env.PORT,()=>{
    console.log(`server started success on ${process.env.PORT}`);
})