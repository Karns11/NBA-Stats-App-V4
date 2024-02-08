import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/NBA-App-Home");
    }
  }, [navigate, userInfo]);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomeScreen;
