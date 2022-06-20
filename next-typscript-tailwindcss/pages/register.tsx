import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from "../styles/Home.module.css";
import formImage from "../public/assets/formicon.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import Joi from "joi-browser";
import AnimatedBorderDiv from "./AnimatedBorderDiv";

const Register: NextPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { signUp } = useAuth();
  const [errors, setErrors] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setErrors(null);
    }, 3000);
  }, [errors]);

  const schema = {
    // Joi schema for validation
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }) // email validation
      .label("Email"),
    password: Joi.string().required().label("Password"), // password validation
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .label("Password did not match"),
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
      console.log(data);
      // If validation fails
      setErrors(data);
      setIsAnimating(true); // Set isAnimating to true
      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    } else {
      // If validation passes
      try {
        await signUp(formData.email, formData.password); // Sign in function call
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center flex-col items-center m-0 bg-slate-800 w-screen h-screen">
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
                <div
                  id="SignIn"
                  className="flex justify-center flex-row items-center  bg-white p-2 shadow-lg rounded-lg"
                >
                  <Image
                    loader={imageLoader}
                    unoptimized
                    src={formImage}
                    alt="Form"
                    width="200"
                    height="200"
                  />

                  <div className="flex flex-col items-start gap-3 mt-3 mr-5">
                    <div className="flex flex-col">
                      <label htmlFor="email">Email: </label>
                      {isAnimating ? (
                        <AnimatedBorderDiv>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            placeholder="Enter your Email"
                            onChange={handleChange}
                            className={`w-72 h-7 pl-2 bg-white text-slate-800 text-l z-12 focus:outline-none`}
                          />
                        </AnimatedBorderDiv>
                      ) : (
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          placeholder="Enter your Email"
                          onChange={handleChange}
                          className={`w-72 h-7 pl-2 bg-slate-100 text-slate-800 text-l rounded-t-md z-12 focus:outline-none`}
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label title="Password should be digits (0 to 9) or alphabets (a to z).">
                        Password:
                      </label>
                      {isAnimating ? (
                        <AnimatedBorderDiv>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className={`w-72 h-7 pl-2 bg-white text-slate-800 text-l z-12 focus:outline-none`}
                          />
                        </AnimatedBorderDiv>
                      ) : (
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={formData.password}
                          placeholder="Enter your password"
                          onChange={handleChange}
                          className={`w-72 h-7 pl-2 bg-slate-100 text-slate-800 text-l rounded-t-md z-12 focus:outline-none`}
                        />
                      )}

                      <label
                        title="Password should be digits (0 to 9) or alphabets (a to z)."
                        className="mt-2"
                      >
                        Confirm Password:
                      </label>
                      {isAnimating ? (
                        <AnimatedBorderDiv>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            placeholder="Confirm password"
                            onChange={handleChange}
                            className={`w-72 h-7 pl-2 bg-white text-slate-800 text-l z-12 focus:outline-none`}
                          />
                        </AnimatedBorderDiv>
                      ) : (
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          placeholder="Confirm password"
                          onChange={handleChange}
                          className={`w-72 h-7 pl-2 bg-slate-100 text-slate-800 text-l rounded-t-md z-12 focus:outline-none`}
                        />
                      )}
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                      <button
                        type="submit"
                        className={`bg-blue-800 rounded-sm text-white pl-2 pr-2 pt-1 pb-1 text-sm `}
                        onClick={handleSubmit}
                      >
                        Sign Up
                      </button>
                      <div>or</div>

                      <Link href="/login">
                        <a>
                          <button
                            className={`rounded-sm text-blue-800 pl-2 pr-2 pt-1 pb-1 text-sm`}
                          >
                            Sign in
                          </button>
                        </a>
                      </Link>
                    </div>

                    <Link href="/resetpassword">
                      <a>
                        <button className="rounded-sm text-blue-800 pl-2 pr-2 pt-1 pb-1 text-sm hover:underline">
                          Forgot password?
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>

                {/* Alert for Confirm password */}
                {errors?.confirmPassword && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mt-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">
                      {errors?.confirmPassword ? errors.confirmPassword : ""}
                    </span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Register;