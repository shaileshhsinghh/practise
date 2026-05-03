const testingmiddleware = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "Server Working",
    });
    next();
  } catch (err) {
    next(err);
  }
};

const createusermiddleware = async (req, res, next) => {
  try {
    const { name, username, password } = req.body;
    const data = { name, username, password };
    res.status(201).json({
      msg: "User created",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { testingmiddleware, createusermiddleware };
