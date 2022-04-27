const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const HTTP_STATUS_CODES = require("../../lib/constants");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../../public/avatars");

const updateAvatar = async (req, res) => {
  const { _id: id } = req.user;
  const { path: pathTemp, originalname } = req.file;

  const avatar = path.join(avatarDir, originalname);
  const avatarName = `${originalname}-${id}`;
  const avatarURL = path.join("public/avatars", avatarName);

  if (pathTemp) {
    Jimp.read(pathTemp, (err, img) => {
      if (err) {
        return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
          message: err.message,
        });
      }

      img.resize(250, 250).quality(60).write(pathTemp);
    });
  }

  try {
    await fs.rename(pathTemp, avatar);
    await User.findByIdAndUpdate(id, { avatarURL });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: "Avatar updated successfully",
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(pathTemp);

    res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      message: "Error updating avatar",
    });
  }
};

module.exports = updateAvatar;
