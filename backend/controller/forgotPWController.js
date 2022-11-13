const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//  for send mail more infor https://www.w3schools.com/nodejs/nodejs_email.asp
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");
/** for send mail ( include link for send user name )*/
module.exports.forgotUserName = async (req, res) => {
  const { email } = req.body;
  console.log(email + "controller");

  try {
    const findUser = await User.findOne({ email });
    if (!findUser) {
      {
        return res.json({ status: "No" });
      }
    }

    const secret = process.env.JWT_SECRET + findUser.password;
    const token = jwt.sign(
      { email: findUser.email, username: findUser.username },
      secret,
      {
        expiresIn: "5m",
      }
    );

    const link = `http://localhost:5000/send_username/${findUser._id}/${token}`;
    const filePath = path.join(
      __dirname,
      "../../frontend/src/emailTemplates/findID.html"
    );
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      username: findUser.username,
      email: findUser.email,
      resetLink: link,
    };
    const htmlToSend = template(replacements);

    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ktccodeteam5@gmail.com",
        pass: "xlznphqaxopaunyp",
      },
    });

    var mailOptions = {
      from: "ktccodeteam5@gmail.com",
      to: findUser.email,
      subject: "Password Reset",
      html: htmlToSend,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {}
};

/** for send mail  for reset password ) and chekc account is exist */
module.exports.forgotPassword = async (req, res) => {
  const { email, username } = req.body;
  console.log(email + "email" + username + "username");

  try {
    const findUser = await User.findOne({ email });
    const findUsername = await User.findOne({ username });

    if (!findUser || !findUsername) {
      {
        console.log("NOOOOO");
        return res.json({ status: "No" });
      }
    }

    const secret = process.env.JWT_SECRET + findUser.password;
    const token = jwt.sign(
      { email: findUser.email, id: findUser._id, username: findUser.username },
      secret,
      {
        expiresIn: "5m",
      }
    );

    const link = `http://localhost:5000/forgotPassword/reset-password/${findUser._id}/${token}`;

    const filePath = path.join(
      __dirname,
      "../../frontend/src/emailTemplates/resetPassword.ejs"
    );
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      username: findUser.username,
      resetLink: link,
    };
    const htmlToSend = template(replacements);

    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ktccodeteam5@gmail.com",
        pass: "xlznphqaxopaunyp",
      },
    });

    var mailOptions = {
      from: "ktccodeteam5@gmail.com",
      to: email,
      subject: "Password Reset",
      html: htmlToSend,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
};

/**for reset password page ( for reset password page link in) */
module.exports.resetPasswordEmail = async (req, res) => {
  const { id, token } = req.params;

  console.log(req.params);

  const findUser = await User.findOne({ _id: id });

  if (!findUser) {
    {
      return res.json("User Not Exists!!");
    }
  }
  const secret = process.env.JWT_SECRET + findUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("../../frontend/src/emailTemplates/resetPasswordLink", {
      email: verify.email,
      username: verify.username,
    });
  } catch (error) {
    res.send("Not Verified");
  }
};

/** reset link page in the email */
module.exports.resetPasswordLink = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  console.log(req.params);

  const findUser = await User.findOne({ _id: id });

  if (!findUser) {
    {
      return res.json("User Not Exists!!");
    }
  }
  const secret = process.env.JWT_SECRET + findUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    // res.render("../../frontend/src/emailTemplates/resetPasswordLink", {
    //   email: verify.email,
    //   username: verify.username,
    // });
  } catch (error) {
    res.send("Not Verified");
  }
};
