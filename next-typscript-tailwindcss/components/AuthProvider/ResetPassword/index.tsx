import AnimatedBorderDiv from "../../../pages/AnimatedBorderDiv";

export interface InputProps {
  isAnimating: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueEmail: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const resetPassword = (props:InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs text-slate-500">
        Email:
      </label>
      {props.isAnimating ? (
        <AnimatedBorderDiv>
          <input
            id="email"
            name="email"
            type="email"
            value={props.valueEmail}
            onChange={props.onChange}
            className={`w-72 h-7 pl-2 bg-white border-2 rounded-sm text-lg z-12 focus:outline-none`}
          />
        </AnimatedBorderDiv>
      ) : (
        <input
          id="email"
          name="email"
          type="email"
          value={props.valueEmail}
          onChange={props.onChange}
          className={`w-72 h-7 pl-2 bg-white border-2 rounded-sm text-lg z-12 focus:outline-none`}
        />
      )}
    </div>
  );
};

export default resetPassword;
