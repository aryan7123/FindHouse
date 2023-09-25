import express from "express";
import dotenv from "dotenv";
import Users from "../models/users.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";

const userRouter = express.Router();
dotenv.config();

userRouter.post('/register', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const isChecked = req.body.isChecked;

    try {
        const selectEmail = await Users.findOne(({ email: email }));
        const selectUsername = await Users.findOne(({ username: username }));

        if(!username || !email || !password || !confirmPassword) {
            res.status(200).json({ message: "All Fields are required" });
        }
        else if(!isChecked) {
            res.status(200).json({ message: "You have to agree the terms and conditions" });
        }
        else if(selectEmail){
            res.status(200).json({ message: "Email already exists" });
        }
        else if(selectUsername){
            res.status(200).json({ message: "Username already exists" });
        }
        else if(password !== confirmPassword) {
            res.status(200).json({ message: "Password does not match" });
        }
        else {
            const newUser = {
                username: username,
                email: email,
                password: password,
                verification_code: "xxxxx"
            }
            const newUserData = new Users(newUser);
            const saveUser = await newUserData.save();
            if(saveUser) {
                res.status(200).json({ message: "You have been registered successfully!" });
            }
            else {
                res.status(200).json({ message: "Registration Error!" });
            }
        }
    } catch (error) {
        console.error(error);
    }
});

userRouter.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const selectUser = await Users.findOne({ email: email, password: password });

        if(!email || !password) {
            res.status(200).json({ message: "All Fields are required" });
        }
        else if(!selectUser) {
            res.status(200).json({ message: "Wrong Credentials" });
        }
        else {
            const userId = selectUser._id;
            const saveUser = jwt.sign({
                token: userId,
            }, "user_fh_token");

            if(saveUser) {
                res.status(200).json({ token: saveUser, message: "You have been successfully logged in" });
            }            
        }
    } catch (error) {
        console.error(error);
    }
});

userRouter.post("/details", async (req, res) => {
    const token = req.body;
    const decodedToken = jwt.decode(token.token);
    const userId = decodedToken.token;

    try {
        const selectUser = await Users.findById(userId);
        if(selectUser) {
            res.status(200).json({ user: selectUser });
        }
    } catch (error) {
        console.log(error);
    }
});

userRouter.post("/send-email", async (req, res) => {
    const email = req.body.email;

    try {
        const selectUser = await Users.findOne({ email: email });
        if(!email) {
            res.status(200).json({ message: "All Fields are required" });
        }
        else if(selectUser) {
            const otp = otpGenerator.generate(6, { digits: true, specialChars: false, alphabets: false });
            const updateUser = await Users.findOneAndUpdate({ verification_code: otp });
            const transporter = nodemailer.createTransport({
                host: "smtp.zoho.in",
                port: 465,
                secure: true,
                auth: {
                  user: process.env.MAIL_USER,
                  pass: process.env.MAIL_PASSWORD,
                },
            });
            async function main() {
                const info = await transporter.sendMail({
                    from: process.env.MAIL_USER,
                    to: email,
                    subject: "OTP Verification",
                    text: "Thank you for using our services! To reset the password of your account, we require you to verify your identity with a one-time password (OTP).<br>",
                    html: `
                    Your OTP is: ${otp}
                    <br><br>
                    Please enter this OTP on the verification page to complete the process. Note that this OTP is valid for a limited time period.
                    <br><br>
                    If you did not request this OTP, please disregard this email and we recommend not to share your OTP with anyone.
                    `
                });
            }
            main();
            res.status(200).json({ message: "Mail sent to your email address" });
        }
        else {
            res.status(200).json({ message: "This email address does not exist" });
        }
    } catch (error) {
        console.error(error);
    }
});

userRouter.post("/verify-otp", async (req, res) => {
    const otp = req.body.otp;

    try {
        const selectOtp = await Users.findOne({ verification_code: otp });
        if(selectOtp) {
            res.status(200).json({ message: "OTP Verified Successfully" });
        }
        else {
            res.status(200).json({ message: "OTP Verification Failed" });
        }
    } catch (error) {
        console.error(error);
    }
});

userRouter.post("/new-password", async (req, res) => {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const otp = req.body.otp;

    try {
        const selectUser = await Users.findOne({ verification_code: otp });
        
        if(!password || !confirmPassword) {
            res.status(200).json({ message: "All Fields are required" });
        }
        else if(password !== confirmPassword) {
            res.status(200).json({ message: "Password does not match" });
        }
        else if(selectUser) {
            const updateUser = await Users.findOneAndUpdate({ password: password });
            if(updateUser) {
                res.status(200).json({ message: "Password Updated Successfully" });
            }
        }
        else {
            res.status(200).json({ message: "Password cannot be updated" });
        }
    } catch (error) {
        console.error(error);
    }
});

export default userRouter;