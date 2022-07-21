import React, { useEffect, useRef } from "react";

const SideAnimation = () => {
  const uRef = useRef(null);
  
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div className="w-full h-full text-white bg-violet-100 drop-shadow-sm z-50 overflow-hidden">
      <lottie-player
        id="firstLottie"
        ref={uRef}
        autoplay
        loop
        mode="normal"
        speed={0.4}
        src="https://assets2.lottiefiles.com/packages/lf20_u8o7BL.json"
        // className="fixed"
      ></lottie-player>
    </div>
  );
};

export default SideAnimation;
