import React from "react";
import "./headerApp.styles.css";

export const HeaderApp = () => {
  return (
    <>
      <div className="headerApp flex">
        <div className="containerLogo flex">
          <div className="flex animation">
            <h2>G</h2>
          </div>
          <h2>Gallery App</h2>
        </div>
        <div className="usernameContainer">
          <div className="flex">
            <h2>b</h2>
          </div>
        </div>
      </div>
    </>
  );
};
