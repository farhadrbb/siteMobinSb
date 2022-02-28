import React from "react";
import styles from "./style.module.css";
export const Video = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {/* <video
          className={styles.video}
          width="350"
          height="250"
          controls
          style={{ borderRadius: "10px" }}
        >
          <source src={"blob:https://www.aparat.com/2de2f85c-883c-4c93-90d6-a373c82985e0"} type="video/ogg" />
        </video> */}
        {/* <iframe className={styles.video}
          width="350"
          height="250"
          // controls
          // style={{ borderRadius: "10px" }}

          src="https://www.aparat.com/v/25BNi"
        ></iframe>

<iframe width="420" height="315"
src="https://www.aparat.com/eb57f7ea-8db2-4060-9ed4-f27a565530a1">
</iframe>


<iframe  width="425" height="344" 
src="https://www.microsoft.com/es-es/videoplayer/embed/RWfmWf?pid=ocpVideo0-innerdiv-oneplayer&postJsllMsg=true&maskLevel=20&market=es-es" 
frameborder="0" allowfullscreen></iframe> */}
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/25BNi/vt/frame"
          title="معرفی کارگزاری مبین سرمایه"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          className={styles.video}
          width="350"
          height="250"
          controls
          style={{ borderRadius: "10px" }}
          
        ></iframe>
      </div>
    </>
  );
};
