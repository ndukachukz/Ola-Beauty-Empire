import express from "express";
import cors from "cors";
import transporter from "./lib/nodemailer.js";

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
// api root endpoints
app.get("/", (res) => {
  res.statusCode(500).send("error occured " + err);
  res.statusCode(200).send(__dirname + "public/index.html");
});

app.post("/", (req, res) => {
  const obj = req.body;

  const mailOptions = {
    from: obj.name,
    to: `olaruth8@gmail.com, ${obj.name}`,
    subject: "Ola Beauty Empire Appointment From:" + obj.name,
    text: obj.date,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("email sent: " + info);
      res.send(info);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
