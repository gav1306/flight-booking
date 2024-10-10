"use client";
import paperPlane from "../../app/assets/animations/paper-plane.json";
import Player from "lottie-react";

const PaperPlaneAnimation = () => {
  return (
    <Player
      autoplay
      loop
      animationData={paperPlane}
      className="h-[150px] w-[150px]"
    />
  );
};

export default PaperPlaneAnimation;
