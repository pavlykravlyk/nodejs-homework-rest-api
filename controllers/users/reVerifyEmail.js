const HTTP_STATUS_CODES = require("../../lib/constants");
const { User } = require("../../models");
const sendEmail = require("../../helpers");

const reVerifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user && user.verify) {
    res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
      status: "Bad Request",
      code: HTTP_STATUS_CODES.BAD_REQUEST,
      message: "Verification has already been passed",
    });
  } else if (user && !user.verify) {
    const msg = {
      to: email,
      subject: "Email verification",
      text: "Verify your email",
      html: `<a target="_blank" href="http://localhost:${process.env.PORT}/api/users/verify/${verificationToken}">Click to verify</a>`,
    };

    await sendEmail(msg);

    res.status(HTTP_STATUS_CODES.OK).json({
      status: "success",
      code: HTTP_STATUS_CODES.OK,
      // data: {
      //   user: {
      //     email,
      //     subscription: user.subscription,
      //     avatarURL: user.avatarURL,
      //     verificationToken,
      //   },
      // },
      message: "Verification email sent",
    });
  } else {
    res.status(HTTP_STATUS_CODES.NOT_FOUND).json({
      status: "Not Found",
      code: HTTP_STATUS_CODES.NOT_FOUND,
      message: "User not found",
    });
  }
};

module.exports = reVerifyEmail;
