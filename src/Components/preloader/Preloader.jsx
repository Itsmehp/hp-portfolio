import React from "react";
import "./preloader.css";
import { useEffect } from "react";
import { preLoaderAnim } from "../../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Designer,</span>
        <span>Curator.</span>
      </div>
    </div>
  );
};

export default PreLoader;
