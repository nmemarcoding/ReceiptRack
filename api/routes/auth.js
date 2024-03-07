const router = require("express").Router();
const User = require("../models/user.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");



//REGISTER
router.post("/register", async(req, res) => {
    // check if first name last name and email and password are not empty
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
        return res.status(400).json("Please fill in all fields");
    }

    // cheack if the email is already in the database
    const email = await User.findOne({ email: req.body.email });
    if (email) {
        return res.status(400).json("Email already exists");
    }

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            "secret"
        ).toString(),
    });


    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

//LOGIN

router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            return res.status(401).json("Wrong email or password");
        }


        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            "secret"
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        if (originalPassword != inputPassword) {

            return res.status(401).json("Wrong username or password");

        }

        const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin,
            },
            "secret", { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({...others, accessToken });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }

});


module.exports = router;