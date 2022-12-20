import Price from "../models/PriceModel.js";

export const getHargaById = async (req, res) => {
  try {
    const response = await Price.findOne({
      where: {
        id: 1,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateHarga = async (req, res) => {
  try {
    await Price.update(req.body, {
      where: {
        id: 1,
      },
    });
    res.status(200).json({ msg: "Harga Updated" });
  } catch (error) {
    console.log(error.message);
  }
};
