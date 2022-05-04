const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SG_API_KEY);

const sendEmail = async (data) => {
  const msg = { ...data, from: "kravchuk.pavlo@ukr.net" };

  try {
    await sgMail.send(msg);

    return true;
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = sendEmail;
