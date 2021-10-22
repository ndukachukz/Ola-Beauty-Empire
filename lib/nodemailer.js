import nodemailer from "nodemailer";
import dotenv from "dotenv/config";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USERMAIL,
    pass: process.env.MAILPASS,
  },
});
export default transporter;
