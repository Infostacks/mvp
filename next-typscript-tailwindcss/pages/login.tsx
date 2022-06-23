import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import useAuth from "../hooks/useAuth";
import Joi from "joi-browser";
import LogInCard from "../components/login";
import SignUpCard from "../components/signup";
import Link from "next/link";

const Login: NextPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [cPass, setCPass] = useState({ confirmPassword: "" });
  const [confirmPassError, setConfirmPassError] = useState(false);
  const { signIn, signUp } = useAuth();
  const [errors, setErrors] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setErrors(null);
      setConfirmPassError(false)
    }, 3000);
  }, [errors,confirmPassError]);

  const schema = {
    // Joi schema for validation
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    // Validation function for Joi schema
    let options = { abortEarly: false }; // abortEarly: false = return all errors
    let { error } = Joi.validate(formData, schema, options); // error = Joi error object
    if (!error) return null; // if no error, return null

    let errors = []; // if error, create an empty array of errors

    for (let item of error.details) {
      // loop through error.details and push each error to the errors array
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleSubmit = async () => {
    // Function to handle submit
    setErrors(null);
    let data = validate(); // Validation function call
    if (data) {
      // If validation fails
      setErrors(data);
      setIsAnimating(true); // Set isAnimating to true
      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    } else {
      // If validation passes
      try {
        if (logIn) {
          await signIn(formData.email, formData.password);
        } else {
          if (formData.password !== cPass.confirmPassword) {
            setConfirmPassError(true);
          }else{
            await signUp(formData.email, formData.password);
            alert("Successfully Signed Up. Login Now!");
            setLogIn(true);
            resetForm();
          }
        }
      } catch (err) {
        // If sign in fails
        console.log(err);
        setIsAnimating(true); // Set isAnimating to true
        setTimeout(() => {
          setIsAnimating(false);
        }, 1500);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCPass({ ...cPass, [name]: value });
  };

  const resetForm = () => {
    setConfirmPassError(false)
    setFormData({
      email: "",
      password: "",
    });
    setCPass({ confirmPassword: "" });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Candlefish - {logIn ? "Log In" : "Sign Up"}</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://s3.amazonaws.com/app.candlefish.com/icons/favicon.ico"
        />
      </Head>

      <main
        className="absolute flex justify-center flex-col items-center m-0 w-screen h-screen bg-no-repeat bg-cover 
        bg-[url('https://images.unsplash.com/photo-1438382458652-54431bf59e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80')]"
      >
        <div className="flex justify-center items-center w-screen h-screen bg-opacity-90 bg-slate-700 shadow-lg z-50">
          <div className="absolute h-3/4 w-3/4 bg-white flex flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-w-5xl">
            {/* Left Side Logo  */}
            <div
              className="xl:w-1/3 lg:w-1/3 md:h-1/3 sm:h-1/3 xl:h-full lg:h-full md:w-full sm:w-full flex flex-col gap-5 items-center justify-center text-white"
              style={{ backgroundColor: "#414770" }}
            >
              <motion.span
                variants={{
                  hidden: {
                    opacity: 1,
                  },
                  visible: {
                    y: [25, -25],
                    color: "#DCE1E9",
                    transition: {
                      y: {
                        yoyo: Infinity,
                        duration: 1.5,
                        delay: 1.5,
                        ease: "easeOut",
                      },
                    },
                  },
                  removed: {
                    opacity: 1,
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                <BsFillCloudLightningRainFill className="w-32 h-32" />
              </motion.span>
              <h1
                id="logoFont"
                className="text-3xl font-bold drop-shadow-2xl tracking-wider"
              >
                candlefish
              </h1>
            </div>

            {/* LogIn Card  */}
            <div className="xl:w-2/3 lg:w-2/3 md:h-2/3 sm:h-2/3 xl:h-full lg:h-full md:w-full sm:w-full bg-slate-200 flex justify-center items-center">
              <AnimatePresence initial={false}>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 1,
                    },
                    visible: {
                      x: isAnimating ? [0, 25, -25, 25, -25, 0] : 0,
                      transition: {
                        y: {
                          // yoyo: Infinity,
                          duration: 1.5,
                          ease: "easeOut",
                        },
                      },
                    },
                    removed: {
                      opacity: 1,
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="removed"
                  className="w-3/5"
                >
                  <AnimatePresence>
                    <motion.div
                      animate={{
                        // x: [0, 0, 0, -100, -100, 100, 100, 0],
                        // rotate: [0, 45, -45, 45, -45, 0],
                        rotate: 360,
                      }}
                      initial={{
                        opacity: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 50,
                        duration: 1.5,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                    >
                      {/* temp code  */}
                      <div
                        id="SignUp"
                        className="flex justify-center items-center flex-col bg-white shadow-lg max-w-max"
                      >
                        <div className="flex items-start p-8 flex-col">
                          <div className="mt-10 mb-5 flex gap-3 flex-col">
                            <h2 className="text-xs text-slate-400">
                              Welcom to Candlefish
                            </h2>
                            <h1
                              className="text-2xl text-slate-600 font-semibold"
                              id="logoFont"
                            >
                              {logIn
                                ? "Log In to your Account"
                                : "Sign Up for new Account"}
                            </h1>
                          </div>

                          <div className="flex flex-col items-start gap-5 mb-5">
                            {/* place code here */}
                            <div className="flex flex-col gap-3 w-full justify-center">
                              {logIn ? (
                                <LogInCard
                                  isAnimating={isAnimating}
                                  onChange={handleChange}
                                  valueEmail={formData.email}
                                  valuePass={formData.password}
                                  onClick={handleSubmit}
                                />
                              ) : (
                                <SignUpCard
                                  isAnimating={isAnimating}
                                  onChange={handleChange}
                                  valueEmail={formData.email}
                                  valuePass={formData.password}
                                  valueConfPass={cPass.confirmPassword}
                                  onClick={handleSubmit}
                                  onChangeCP={handleCPass}
                                />
                              )}
                              <span
                                style={{
                                  display: confirmPassError ? "block" : "none",
                                  color: "red",
                                  fontSize: "12px",
                                  alignSelf: "flex-end",
                                  marginRight: "5px",
                                }}
                              >
                                *Confirm Password is not same!
                              </span>
                            </div>

                            <div className="flex flex-row gap-2 items-center">
                              <button
                                type="submit"
                                className={`rounded-sm text-white pl-2 pr-2 pt-1 pb-1 text-sm `}
                                onClick={handleSubmit}
                                style={{ backgroundColor: "#5B85AA" }}
                              >
                                {logIn ? "Log In" : "Sign Up"}
                              </button>
                              <div>or</div>

                              <button
                                className={`rounded-sm pl-2 pr-2 pt-1 pb-1 text-sm`}
                                style={{ color: "#5B85AA" }}
                                onClick={() => {
                                  setLogIn((prev) => !prev);
                                  resetForm();
                                }}
                              >
                                {!logIn ? "Log In" : "Sign Up"}
                              </button>
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
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
