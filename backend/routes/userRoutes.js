//User Routes = /api/users

import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  searchPlayer,
  getPlayerStats,
  getPlayerSeasonAvg,
  getTeams,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/searchplayer", searchPlayer);
router.post("/playerstats", getPlayerStats);
router.post("/playerseasonavg", getPlayerSeasonAvg);
router.post("/teams", getTeams);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
