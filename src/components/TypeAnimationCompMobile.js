import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

function TypeAnimationCompMobile() {
  const [textColor, setTextColor] = useState("typeAnimationEveryone");
  return (
    <>
      <div className="typeAnimation_holder Mobile">
        <div>The Open<br/>Network for</div>
        <div className={`typeAnimation ${textColor} Banner__title--second`}>
          <TypeAnimation
            sequence={[
              "everyone",
              2000,
              () => setTextColor("typeAnimationEveryone"),
              "startups",
              2000,
              () => setTextColor("typeAnimationStartups"),
              "creators",
              2000,
              () => setTextColor("typeAnimationCreators"),
              "gamers",
              2000,
              () => setTextColor("typeAnimationGamers"),
              "crypto ninjas",
              2000,
              () => setTextColor("typeAnimationCryptoNinjas"),
            ]}
            wrapper="span"
            speed={10}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  );
}

export default TypeAnimationCompMobile;
