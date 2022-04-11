const validation = (schema) => async (req, res, next) => {
  const { body } = req;

  try {
    await schema.validateAsync(body);
    next();
  } catch (error) {
    // console.log(error.details);
    const { message } = error;

    return res.status(400).json({ status: "error", code: 400, message });
  }
};

module.exports = validation;
