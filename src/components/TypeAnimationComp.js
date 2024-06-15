import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

function TypeAnimationComp() {
  const [textColor, setTextColor] = useState("typeAnimationEveryone");
  return (
    <>
      <div className="typeAnimation_holder">
        <div>The Open Network</div>
        <div className={`typeAnimation ${textColor} Banner__title--second`}>
          <TypeAnimation
            sequence={[
              "for everyone",
              2000,
              () => setTextColor("typeAnimationEveryone"),
              "for startups",
              2000,
              () => setTextColor("typeAnimationStartups"),
              "for creators",
              2000,
              () => setTextColor("typeAnimationCreators"),
              "for gamers",
              2000,
              () => setTextColor("typeAnimationGamers"),
              "for crypto ninjas",
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

export default TypeAnimationComp;
