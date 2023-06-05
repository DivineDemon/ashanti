const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUser = async (req, res) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id: Number(req.query.user_id),
      },
    });

    if (response.length <= 0) {
      res.status(404).json({
        success: false,
        message: "User Not Found!",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Retrieved User!",
        response,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const response = await prisma.user.update({
      where: {
        id: Number(req.query.user_id),
      },
      data: req.body,
    });

    res.status(200).json({
      status: true,
      message: "User Updated Successfully!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};

module.exports = {
  getUser,
  updateUser,
}