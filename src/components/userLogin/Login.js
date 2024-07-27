import React, { useState, useRef, useEffect } from "react";
import Modals from "../modals/Modals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Loading from "../UI/Loading/Loading";
import { ReactComponent as EyeIcon } from "../../assets/svgs/eye-password-show.svg";
import { ReactComponent as EyeOffIcon } from "../../assets/svgs/eye-password-hide.svg";
import { LoggingIn, signUp } from "../store/AuthActions";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("Log in");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalContent, setModalContent] = useState({ header: "", body: "" });
  // const [loadingContent , setLoadingContent] = useState(true);
  // const authCtx = useContext(AuthContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(AuthActions.login({ token: token , isLoggedIn: true}));
      navigate("/home");
    }
    else{
      return;
    }
  }, [dispatch, navigate]);

  // Common success and error handling
  const onSuccess = (token) => {
    localStorage.setItem("token", token);
    setIsLoading(false);
  };

  const onError = () => {
    setModalContent({
      header: "Error",
      body: "Authentication failed!",
    });
    setShowModal(true);
    setIsLoading(false);
  };

  const setSignUpState = () => {
    setInputType("Sign Up");
  };
  const setLoginState = () => {
    setInputType("Log in");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const submitHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const authContent = {
      email: email,
      password: password,
    };
    try {
      if (inputType === "Log in") {
        dispatch(LoggingIn(authContent)).then((token) => {
          if (token) {
            onSuccess(token);
          } else {
            onError();
          }
        });
      } else {
        dispatch(signUp(authContent)).then((token) => {
          if (token) {
            onSuccess(token);
          } else {
            onError();
          }
        });
      }
    } catch (error) {
      onError();
    }
  };
  // let url;
  // if (inputType === "Log in") {
  //   url =
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyATQtCHZf5WVpeu1mp73Sw0OW5TBnx6bfc";
  // } else {
  //   url =
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyATQtCHZf5WVpeu1mp73Sw0OW5TBnx6bfc";
  // }
  // fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email: email,
  //     password: password,
  //     returnSecureToken: true,
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     } else {
  //       return res.json().then((data) => {
  //         throw new Error(data.error.message);
  //       });
  //     }
  //   })
  //   .then((data) => {
  //     setIsLoading(false);
  //     navigate("/home");
  //   })
  //   .catch((error) => {
  //     setModalContent({
  //       header: "Error",
  //       body: error.message,
  //     });
  //     setShowModal(true);
  //     setIsLoading(false);
  //   });
  // romana@gmail.com
  // Romana99

  return (
    <section>
      {showModal && (
        <Modals
          header={modalContent.header}
          body={modalContent.body}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      )}
      <div className="container-bg">
        <div className="container d-flex justify-content-center  align-items-center ">
          <div className="row justify-content-center  align-items-center bg-light">
            <div className="row-wrapper">
              <div className="col-md-12 mb-2">
                <div className="d-flex justify-content-end ">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="-0.5 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21.32L21 3.32001"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 3.32001L21 21.32"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="rounded-circle mx-auto "></div>
              </div>
              <div className="col-md-12 mb-2 text-center status-tittle">
                <h2>{inputType}</h2>
              </div>
              <div className="col-md-12 mb-2 text-center switching-statesType-typo ">
                {inputType === "Log in" ? (
                  <p>
                    Don't have account?{" "}
                    <span
                      className="switching-statesType"
                      onClick={setSignUpState}
                    >
                      Sign Up
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have account?{" "}
                    <span
                      className="switching-statesType"
                      onClick={setLoginState}
                    >
                      Log in
                    </span>
                  </p>
                )}
              </div>
              <div className="col-md-12 mb-2 text-center">
                <button className="btn btn-facebook">
                  <span className="logo-span">
                    <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        fill="#1877F2"
                        d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                      />
                      <path
                        fill="#ffffff"
                        d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                      />
                    </svg>
                  </span>{" "}
                  Login with Facebook
                </button>
              </div>
              <div className="col-md-12 mb-2 text-center">
                <button className="btn btn-facebook">
                  <span className="logo-span">
                    <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
                        fill="#34A853"
                      />
                      <path
                        d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
                        fill="#EB4335"
                      />
                    </svg>
                  </span>{" "}
                  Login with Google
                </button>
              </div>
              <div className="col-md-12 mb-2 d-flex justify-content-center  align-items-center ">
                <hr className="horizontal-Line" />
                <div className="divider">OR</div>
                <hr className="horizontal-Line" />
              </div>
              <div className="col-md-12 mb-2">
                <p className="inputs-headers">Your email</p>
              </div>
              <div className="col-md-12 mb-2">
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-100"
                    ref={emailRef}
                  />
                </div>
              </div>
              <div className="col-md-12 mb-2 password-row pe-2">
                <p className="inputs-headers">Your password</p>
                <p onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <EyeOffIcon width="24" height="24" />
                  ) : (
                    <EyeIcon width="24" height="24" />
                  )}
                </p>
              </div>
              <div className="col-md-12 mb-2">
                <div className="inputs">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-100"
                    ref={passwordRef}
                  />
                </div>
              </div>
              {inputType === "Log in" && (
                <div className="col-md-12 mb-2 d-flex justify-content-end  align-items-center ">
                  <span className="switching-statesType">Forgot password?</span>
                </div>
              )}

              <div className="col-md-12 mb-2 d-flex justify-content-center align-items-center">
                {isLoading ? (
                  <Loading />
                ) : (
                  <button
                    className="btn btn-primary w-100"
                    onClick={submitHandler}
                  >
                    {inputType}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
