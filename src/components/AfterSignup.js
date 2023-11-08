import React from "react";

const AfterSignup = () => {
  let currCount = 264;
  return (
    <>
      <div className="firstDiv" style={{ marginTop: "50px" }}>
        <img src="/magpiie.png" style={{ width: "300px" }} alt="" />
        <p className="congrats">Congratulations on Joining the Magpiie Community!</p>
        <h1 className="descriptionforMagpiie">
          Welcome to a World of Inspiration and Creativity!
        </h1>
        
        <p className="p-under-the-description">
         
          we'll keep you informed every step of the way. When our application is set to launch, you can expect to receive emails or notifications that will guide you into this exciting new phase.
        </p>
      </div>
    </>
  );
};

export default AfterSignup;
