import React from "react";

const InfoImage = ({ itm }) => {
  return (
    <>
      <div className=" px-md-3 text-center ">
       
          <a target="_blank" href={itm.link} rel="noreferrer">
            {" "}
            <img src={itm.src} className="img-fluid mb-3" width="100" alt="" />
         
        </a>
      </div>
      <div className="text-center">
        <p style={{ fontSize: "13px" }}>{itm.text}</p>
      </div>
    </>
  );
};

export default InfoImage;
