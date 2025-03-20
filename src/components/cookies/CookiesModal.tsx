import React from "react";

export default function CookiesModal({ openSettingsModal, handleAccept, data }) {

  // console.log("Cookies ", data);
  // console.log("Cookies Inputs  ", data && JSON?.parse(data?.inputs));

  const handleCookies = () => {
    handleAccept(true);
    // data &&
    //   data?.inputs &&
    //   JSON?.parse(data?.inputs)?.map((d) => {
    //     // console.log("DDD ", d);
    //   });
  };
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
        <div>
          <div className="container-fluid bg-white position-absolute bottom-0">
            <div>
              <div className="row align-items-center py-4">
                <div className=" col-12">
                  <div className="py-4">
                    {/* <div className="fs-14 fw-bold">{data?.heading}</div> */}

                    <div className="fs-12">{data?.description}</div>
                  </div>
                </div>
                <div className=" col-12">
                  <div className="d-sm-flex gap-2 justify-content-end">
                    <div className="py-1">
                      <button
                        onClick={() => openSettingsModal(true)}
                        className="btn btn-outline-dark text-uppercase w-100"
                      >
                        COOKIE-EINSTELLUNGEN
                      </button>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => handleAccept(false)}
                        className="btn bg-warning text-uppercase  w-100"
                      >
                        ALLE ABLEHNEN
                      </button>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={handleCookies}
                        className="btn bg-theme-success text-white text-uppercase  w-100"
                      >
                        ALLE COOKIES AKZEPTIEREN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
