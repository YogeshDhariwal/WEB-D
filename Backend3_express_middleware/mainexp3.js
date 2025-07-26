/**  https://expressjs.com/en/guide/using-middleware.html
 *   (REFER THIS)
 *   USAGE OF MIDDLEWARE 
 *  Middleware is a function which will run before every request
 * 1. WORK ON A REQUEST (modify request,authentication)
 * 2. CREATE OWN MIDDLEWARE ,MULTIPLE MIDDLEWARE
 * 3.WE WANT TO USE A REQUEST IN ALL OTHER REQUEST USE MIDDLEWARE
 * LIKE - TO APPEND A REQUEST
*/

const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");
const blog=require("./router/blog");

/** middleware changes the request or can say it work with the request*/
/** built in middleware */
app.use(express.static('public'))
app.use("/blog",blog);
/** creating own middleare1  */
app.use((req, res, next) => {
    console.log(req.headers);
    req.yogesh = "by yogesh";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} \n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

/** creating middleware 2 */
app.use((req, res, next) => {
    console.log("logged m2");
    next();
})
app.get('/', (req, res) => {

    res.send("heello mittar i respond to /" + req.yogesh);
})

app.get('/about', (req, res) => {

    res.send("heello mittar i respond to /about")
})

app.get('/contact', (req, res) => {

    res.send("heello mittar i respond to /contact")
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})