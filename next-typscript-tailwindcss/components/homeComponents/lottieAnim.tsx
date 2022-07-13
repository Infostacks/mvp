
export interface InputProps {
  svgLink: string;
  ref: React.MutableRefObject<null>;
}

const lottieAnim = (props: InputProps) => {
  return (
      <lottie-player
        id="firstLottie"
        ref={props.ref}
        autoplay
        // controls
        loop
        // complete={() => (setIsVisible(true))}
        mode="normal"
        // src="https://assets2.lottiefiles.com/packages/lf20_01jwptn4.json"
        src={props.svgLink}
      ></lottie-player>
  );
};

export default lottieAnim;