import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import axios from "axios";

// @desc   Auth user/set token
//route    POST /api/users/auth
//@access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc   Register a new user
//route    POST /api/users
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  //calling generateToken() will res.send a cookie along with the user data. The cookie can be seen in postman under cookies tab.
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc   Logout user
//route    POST /api/users/logout
//@access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User Logged out" });
});

// @desc   Get user profile
//route    GET /api/users/profile
//@access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  // If we were to console.log(req.user), then we would get _id, anme, email, createdat, updatedat, __v

  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// @desc   Update user profile
//route    PUT /api/users/profile
//@access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc   Get Player
//route    POST /api/users/searchplayer
//@access  Private
const searchPlayer = asyncHandler(async (req, res) => {
  // Set your API key
  const API_KEY = "1d80b1e6-c99c-4d98-b71f-24772331a263";

  // Set the headers with the API key
  const headers = {
    Authorization: API_KEY,
  };

  const { basketball_player } = req.body;
  //console.log(player);
  axios
    .get(`http://api.balldontlie.io/v1/players?search=${basketball_player}`, {
      headers,
    })
    .then((response) => {
      res.status(200).json({ data: response.data.data });
    })
    .catch((error) => {
      // Handle error
      res.status(404);
      throw new Error(error);
    });
});

// @desc   Get Player stats
//route    POST /api/users/playerstats
//@access  Private
const getPlayerStats = asyncHandler(async (req, res) => {
  // Set your API key
  const API_KEY = "1d80b1e6-c99c-4d98-b71f-24772331a263";

  // Set the headers with the API key
  const headers = {
    Authorization: API_KEY,
  };

  const { playerId, StartDateInput } = req.body;
  //console.log(player);
  axios
    .get(
      `https://api.balldontlie.io/v1/stats?player_ids[]=${playerId}&per_page=100&start_date=${StartDateInput}`,
      {
        headers,
      }
    )
    .then((response) => {
      res.status(200).json({ data: response.data.data });
    })
    .catch((error) => {
      // Handle error
      res.status(404);
      throw new Error(error);
    });
});

// @desc   Get Player season avg
//route    POST /api/users/playerseasonavg
//@access  Private
const getPlayerSeasonAvg = asyncHandler(async (req, res) => {
  // Set your API key
  const API_KEY = "1d80b1e6-c99c-4d98-b71f-24772331a263";

  // Set the headers with the API key
  const headers = {
    Authorization: API_KEY,
  };

  const { playerId, season } = req.body;
  //console.log(player);
  axios
    .get(
      `https://api.balldontlie.io/v1/season_averages?season=${season}&player_ids[]=${playerId}`,
      {
        headers,
      }
    )
    .then((response) => {
      res.status(200).json({ data: response.data.data });
    })
    .catch((error) => {
      // Handle error
      res.status(404);
      throw new Error(error);
    });
});

// @desc   Get Teams
//route    POST /api/users/teams
//@access  Private
const getTeams = asyncHandler(async (req, res) => {
  // Set your API key
  const API_KEY = "1d80b1e6-c99c-4d98-b71f-24772331a263";

  // Set the headers with the API key
  const headers = {
    Authorization: API_KEY,
  };

  //console.log(player);
  axios
    .get(`http://api.balldontlie.io/v1/teams`, {
      headers,
    })
    .then((response) => {
      res.status(200).json({ data: response.data.data });
    })
    .catch((error) => {
      // Handle error
      res.status(404);
      throw new Error(error);
    });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  searchPlayer,
  getPlayerStats,
  getPlayerSeasonAvg,
  getTeams,
};
