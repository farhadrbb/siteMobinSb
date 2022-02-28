import React from "react";

const Icons = ({ itm }) => {
  return (
    <>
      <div>
        <img src={itm.src} className="mb-4" alt="" />
        <div
          style={{ fontSize: "25px", color: "white" }}
          className="mb-4
                                "
        >
          {itm.int}
        </div>
        <div>
          <p style={{ color: "white" }}>{itm.text}</p>
        </div>
      </div>
    </>
  );
};

export default Icons;
