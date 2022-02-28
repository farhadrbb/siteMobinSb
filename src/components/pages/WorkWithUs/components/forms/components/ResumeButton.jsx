import { SaveAlt } from "@material-ui/icons";
import React , { useRef } from "react";
import styles from "../../../style.module.css";

export const ResumeButton = ({ apiSubmit , value, setValue }) => {

  
  const refInput = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    refInput.current.click();
  };

  const openFile = (file) => {
    const input = file.target;
    const inputValue = file.target.value;

    if (!inputValue) {
      return;
    }
    const reader = new FileReader();

    reader.onload = function () {
      const dataURL = reader.result;

      let image = input.files[0].type;
      let data = {
        file: dataURL,
        file_type: image.split("/")[1],
        file_name: input.files[0].name,
        file_size: input.files[0].size,
      };

      // if (data.file_type !== "pdf") {
      //   toast.error("لطفا فایل با فرمت پی دی اف وارد کنید");
      //   return;
      // }
      // if (data.file_size > 3000000) {
      //   toast.error("حجم فایل باید کمتر از 3 مگابایت باشد");
      //   return;
      // }

      // ("size",typeof data.file_size);
      // setValue(prev=>({
      //     ...prev,
      //     ["file_name"]:data
      // }))
      setValue(data);
    };

    // reader.onerror=function () {
    //     toast.error("sdgsg")
    //     return

    // }
    // reader.onloadend=function () {
    //     toast.error("sdgsg")
    //     return

    // }
    // reader.onprogress=function () {
    //     toast.error("pro")
    //     return

    // }
    // reader.onabort=function () {
    //     toast.error("bort")
    //     return

    // }

    //   if (reader.result===null) {
    //       toast.error("null")
    //       return

    //   }
    //   reader.result
    reader.readAsDataURL(input.files[0]);
  };

  //  function readFileAsync(file) {
  //     return new Promise((resolve, reject) => {
  //       let reader = new FileReader();

  //       reader.onload = () => {
  //         resolve(reader.result);
  //       };

  //       reader.onerror = reject;

  //       reader.readAsArrayBuffer(file);
  //     })
  //   }

  //   const readURL = async (input) => {
  //     try {
  //       const file = input.files[0]; // this is where your file data is
  //       ("file.name",file.name);
  //       let contentBuffer = await readFileAsync(file);
  //       (contentBuffer.byteLength); // Length in ArrayBuffer

  //       setValue(file)
  //     } catch (error) {
  //       (error);
  //     }
  //   }

  const handelSubmit = () => {
      apiSubmit(value)
  }

  return (
    <>
      <div
        className="d-flex justify-content-center justify-content-lg-between align-items-center  flex-column flex-lg-row text-center
                "
      >
        <div className="d-flex">
          <div className="ml-2">
            <div
              className={styles.btnResume}
              style={{ textAlign: "left" }}
              onClick={handleClick}
            >
              <a
                href="/#"
                style={{
                  width: "160px",
                  display: "inline-block",
                  backgroundColor: "white",
                  color: "black !important",
                }}
                className="text-center"
              >
                <SaveAlt /> آپلود رزومه{" "}
              </a>
            </div>

            <input
              type="file"
              style={{ display: "none" }}
              ref={refInput}
              onChange={openFile}
            />
          </div>
          <div>
            <div className={styles.btnNameFile} style={{ textAlign: "left" }}>
              <a
                href="/#"
                style={{
                  minWidth: "160px",
                  display: "inline-block",
                  color: "black !important",
                }}
                className="text-center"
                onClick={(e) => e.preventDefault()}
              >
                {value.file_name ? value.file_name : "نام فایل"}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.btnWhy} style={{ textAlign: "left" }}>
          <div
            onClick={() => handelSubmit()}
            style={{
              width: "200px",
              display: "inline-block",
            }}
            className="text-center"
          >
            {" "}
            ارسال رزومه
          </div>
        </div>
      </div>
    </>
  );
};
