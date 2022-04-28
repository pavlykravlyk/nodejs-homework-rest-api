const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const HTTP_STATUS_CODES = require("../../lib/constants");
const Jimp = require("jimp");

const transformAvatar = async (imgPath) => {
  try {
    const img = await Jimp.read(imgPath);
    const { width, height } = img.bitmap;
    width > height ? img.resize(Jimp.AUTO, 250) : img.resize(250, Jimp.AUTO);
    img.quality(60);
    img.write(imgPath);
  } catch (error) {
    console.log(error);
  }
};

const updateAvatar = async (req, res) => {
  const { _id: id } = req.user;
  const { path: tmpAvatar, originalname } = req.file;

  const newAvatar = path.join(__dirname, "../../public/avatars", originalname);
  const avatarURL = path.join("public/avatars", `${id}.${originalname}`);

  try {
    await transformAvatar(tmpAvatar);
    await fs.rename(tmpAvatar, newAvatar);
    await User.findByIdAndUpdate(id, { avatarURL });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: "Avatar updated successfully",
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(tmpAvatar);

    res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      message: "Error updating avatar",
    });
  }
};

module.exports = updateAvatar;
