const app = require("express")()
    , cors = require("cors")
    , {body, validationResult, check} = require("express-validator")

app.use(require("express").json())
app.use(cors())

checkList = [
    body("username").notEmpty().withMessage("username empty check")
    , body("email").notEmpty().withMessage("email empty check").isEmail().withMessage("email check")
    , body("password").matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\W+).{6,15}$/)
    // , body("address").notEmpty()
    , body("address.zip").notEmpty()
    , check("address.zip").isPostalCode("DE")

]

app.post("/submit", checkList, submitControllor)

function submitControllor(req, res){
    const {errors} = validationResult(req)
    // console.log(Array.isArray(errors.errors))
    if (errors.length > 0) res.json(errors)
    else if (!req.body.age || +req.body.age <= 18 || +req.body.age >= 65) res.json("only accept age between 18 and 65")
    else res.json("Everything is fine")
}


app.listen(5000,()=>console.log("server running on 5000")) 