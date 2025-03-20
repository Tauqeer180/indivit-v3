"use client";
import Link from "next/link";
import React, { useState } from "react";

interface LoginCardProps {
  title: string;
  isCloseBtn?: boolean;
  onClose?: () => void;
  newTab?: boolean;
  fromMixer?: string;
}

export default function LoginCard({
  title,
  isCloseBtn,
  onClose,
  newTab,
  fromMixer,
}: LoginCardProps) {
  const [isVisible, setIsVisibile] = useState(false);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-6">
          {/* {loading && <Loader />} */}
          <div className="card" style={{ borderRadius: "3rem" }}>
            {isCloseBtn && (
              <div
                className=" btn text-end fw-bold me-3 mt-2 p-2"
                onClick={onClose}
              >
                &#10006;
              </div>
            )}
            <div className={`card-body p-5 ${isCloseBtn && " pt-0"}`}>
              <div className="mb-md-5">
                <h3 className="mb-2 text-center">{title}</h3>
                <p className="text-center pb-4">
                  {/* Ready to drink in all the benefits? Log in now! */}
                  Melde dich einfach in deinem indivit Konto an
                </p>
                <form onSubmit={() => console.log("")}>
                  <div>
                    <label className="form-label" htmlFor="typeEmailX">
                      E-Mail
                    </label>
                    <div className="flx-login-icons pb-3">
                      <i className="fa fa-solid fa-envelope-open flx-icon"></i>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control rounded"
                        placeholder="Gib hier deine E-Mail Adresse ein"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        // {...register("email", {
                        //   required: "Must be Valid Email",
                        //   pattern:
                        //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        // })}
                      />
                      {/* {errors.email && (
                        <p className="text-danger my-1">
                          {errors.email.message}
                        </p>
                      )} */}
                    </div>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="typePasswordX">
                      Passwort
                    </label>
                    <div className="flx-login-icons pb-3 position-relative ">
                      <i className="fa fa-solid fa-key flx-icon"></i>
                      <input
                        // type={isVisibile ? "text" : "password"}
                        id="typePasswordX"
                        className="form-control rounded"
                        placeholder="Gib hier dein Passwort ein"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        // {...register("password", {
                        //   required: true,
                        //   minLength: 6,
                        // })}
                      />
                      <i
                        className={`fa fa-solid  ${
                          isVisible ? "fa-eye" : "fa-eye-slash"
                        }  flx-icon top-0 end-0 cursor-pointer text-black-50  `}
                        // style={{ color: "var(--green)" }}
                        onClick={() => setIsVisibile(!isVisible)}
                      ></i>
                      {/* <button className="btn position-absolute top-0 end-0">
                          </button> */}
                      {/* {errors?.password?.type === "required" && (
                        <p className="text-danger my-1">* Angabe notwendig</p>
                      )}
                      {errors?.password?.type === "minLength" && (
                        <p className="text-danger my-1">
                          Min Length should be 6
                        </p>
                      )} */}
                    </div>
                  </div>

                  <p className="text-end">
                    <Link
                      href="/forgotpassword"
                      className=" text-dark text-decoration-none"
                    >
                      {/* Forgot Password */}
                      Passwort vergessen?
                    </Link>
                  </p>

                  <button className=" btn-solid-success w-100" type="submit">
                    Anmelden
                    {/* Login */}
                  </button>
                </form>
              </div>
              <p className="mb-0 text-center">
                Du hast noch keinen Account?
                {/* Don't have an account yet? */}
                <Link
                  href={`/signup?fromMixer=${fromMixer}`}
                  target={newTab ? "_blank" : null}
                  rel={newTab ? "noopener noreferrer" : null}
                  className="text-theme-success"
                >
                  &nbsp; &nbsp;Jetzt Registrieren
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
