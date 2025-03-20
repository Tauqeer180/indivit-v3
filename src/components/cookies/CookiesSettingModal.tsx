import React, { useState } from "react";

export default function CookiesSettingModal({
  data,
  openCookieModal,
  handleAccept,
}) {
  const [selected, setSelected] = useState(0);
  let inputs = (data && data?.inputs && JSON?.parse(data?.inputs)) || [];
  return (
    <>
      <div
        className=" position-fixed top-0 bottom-0 w-100 "
        style={{
          zIndex: 999999,
          overflow: "hidden",
          backgroundColor: "#00000080",
        }}
      >
        <div className="h-100 d-flex align-items-center">
          <div className="card w-75 bg-white mx-auto">
            <div className="">
              <div className=" border-b-1 p-3 fw-bold text-secondary fs-5 d-flex justify-content-between">
                <span>{data?.heading}</span>
                <span onClick={openCookieModal} className="cursor-pointer">
                  &#10006;
                </span>
              </div>
              <hr className="m-0" />
              <div className="">
                <div className="row align-items-center ">
                  <div className="col-md-3">
                    <div className="">
                      {inputs?.map((d, i) => {
                        return (
                          <div
                            onClick={() => setSelected(i)}
                            className={`p-0 border-bottom border-top cursor-pointer ${
                              selected == i
                                ? " border-dark "
                                : "bg-secondary-opacity"
                            } `}
                          >
                            <div
                              className={`border-start border-5 p-2 ${
                                selected == i ? "border-success" : "border-none"
                              } `}
                            >
                              {d?.field}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-9 pe-md-5">
                    {inputs?.map((d, i) => {
                      return (
                        <div className={`${selected == i ? "" : "d-none"}`}>
                          <div className="fs-6 fw-bold d-flex justify-content-between">
                            {d?.field}{" "}
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                disabled={i == 0}
                                defaultChecked={i == 0}
                                id={i}
                              />
                            </div>
                          </div>
                          <div>{d?.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr className="m-0" />
              <div className="d-flex p-3 justify-content-between">
                <button
                  className="btn bg-warning text-uppercase"
                  onClick={() => handleAccept(true)}
                >
                  Meine Auswahl bestätigen
                </button>
                <button
                  onClick={() => handleAccept(true)}
                  className="btn bg-theme-success text-white text-uppercase"
                >
                  Alle zulassen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
