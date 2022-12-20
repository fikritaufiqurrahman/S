import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  Register,
  Login,
  Logout,
  getDataPembayaran,
  updatePembayaran,
} from "../controllers/Users.js";
import { getHargaById, updateHarga } from "../controllers/Pembayaran.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", getUserById);
router.post("/users/create", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/users/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/pembayaran/:id", getUserById);
router.get("/pembayaran", getDataPembayaran);
router.patch("/pembayaran/:id", updatePembayaran);
router.get("/update-pembayaran", getHargaById);
router.patch("/updateharga-pembayaran/:id", updateHarga);

export default router;
