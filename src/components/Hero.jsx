import React from "react";

const Hero = () => {
  return (
    <header
      className="hero"
      style={{ backgroundImage: "/assets/images/login-background.jpg", border: '1px solid red' }}
    >
      <button>GET ALL THERE</button>
      <p>
        Get Premier Access to Raya and the Last Dragon for an additional fee
        with a Disney+ subscription.
        <br /> As of 03/26/21, the price of Disney+ and The Disney Bundle will
        increase by $1.
      </p>
    </header>
  );
};

export default Hero;
