import Link from "next/link";
import AnimatedBorderDiv from "../../pages/AnimatedBorderDiv";

export interface InputProps {
  isAnimating: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueEmail: string;
  valuePass: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LogInCard = (props: InputProps) => {
  return (
    <div
      id="SignIn"
      className="flex justify-center items-center flex-col bg-white shadow-lg max-w-max"
    >
      <div className="flex items-start p-8 flex-col">
        <div className="mt-10 mb-5 flex gap-3 flex-col">
          <h2 className="text-xs text-slate-400">Welcom to Candlefish</h2>
          <h1 className="text-2xl text-slate-600 font-semibold" id="logoFont">
            Log into your Account
          </h1>
        </div>

        <div className="flex flex-col items-start gap-5 mb-5">
          <div className="flex flex-col gap-3">
            {props.isAnimating ? (
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-slate-500">
                  Email:{" "}
                </label>
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
                <label htmlFor="password" className="text-xs text-slate-500">
                  Password:
                </label>
                <AnimatedBorderDiv>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={props.valuePass}
                    onChange={props.onChange}
                    className={`w-72 h-7 pl-2 bg-white border-2 rounded-sm text-lg z-12 focus:outline-none`}
                  />
                </AnimatedBorderDiv>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-slate-500">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={props.valueEmail}
                  onChange={props.onChange}
                  className={`w-72 h-7 pl-2 border-2 rounded-sm text-md z-12 focus:outline-none`}
                />
                <label htmlFor="password" className="text-xs text-slate-500">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={props.valuePass}
                  onChange={props.onChange}
                  className={`w-72 h-7 pl-2 border-2 rounded-sm text-md z-12 focus:outline-none`}
                />
              </div>
            )}
          </div>

          <div className="flex flex-row gap-2 items-center">
            <button
              type="submit"
              className={`bg-blue-800 rounded-sm text-white pl-2 pr-2 pt-1 pb-1 text-sm`}
              onClick={props.onClick}
              style={{ backgroundColor: "#5B85AA" }}
            >
              Sign in
            </button>
            <div>or</div>

            <Link href="/register">
              <a>
                <button
                  className={`rounded-sm pl-2 pr-2 pt-1 pb-1 text-sm`}
                  style={{ color: "#5B85AA" }}
                >
                  Sign Up
                </button>
              </a>
            </Link>
          </div>

          <Link href="/resetpassword">
            <a>
              <button
                className="rounded-sm pl-2 pr-2 pt-1 pb-1 text-sm hover:underline"
                style={{ color: "#5B85AA" }}
              >
                Forgot password?
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInCard;
