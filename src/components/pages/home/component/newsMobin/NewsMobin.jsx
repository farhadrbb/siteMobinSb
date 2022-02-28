import React from "react";
import styles from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const NewsMobin = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/*<div className={styles.sectionNews}>*/}
      {/*    <div className="container d-flex  align-items-center flex-column">*/}
      {/*        <div className={styles.tittle}>*/}
      {/*            <h3>اخبار و رویدادهای مبین‌سرمایه</h3>*/}
      {/*        </div>*/}
      {/*        <div>*/}
      {/*            <div className="container">*/}
      {/*                <div className="row text-right">*/}

      {/*<div className="col-4">*/}
      {/*    <div className="mb-3">*/}
      {/*        <img src={"/asset/images/homeImage/55555555.png"} className="img-fluid" alt=""/>*/}
      {/*    </div>*/}
      {/*    <div className={styles.tittleNews}><p>دیدار مدیرعامل بانک ملی با مدیرعامل کارگزاری*/}
      {/*        مبین سرمایه</p></div>*/}
      {/*    <div className="blockquote-footer ">‏17 دی 1399</div>*/}
      {/*</div>*/}

      {/*<div className="col-4">*/}
      {/*    <div className="mb-3">*/}
      {/*        <img src={"/asset/images/homeImage/980328-5.png"}*/}
      {/*             className="img-fluid" alt=""/>*/}
      {/*    </div>*/}
      {/*    <div className={styles.tittleNews}><p>دیدار مدیرعامل بانک ملی با مدیرعامل کارگزاری*/}
      {/*        مبین سرمایه</p></div>*/}
      {/*    <div className="blockquote-footer ">‏17 دی 1399</div>*/}
      {/*</div>*/}
      {/*<div className="col-4">*/}
      {/*    <div className="mb-3">*/}
      {/*        <img src={"/asset/images/homeImage/photo_2019-11-04_10-06-45.png"}*/}
      {/*             className="img-fluid" alt=""/>*/}
      {/*    </div>*/}
      {/*    <div className={styles.tittleNews}><p>دیدار مدیرعامل بانک ملی با مدیرعامل کارگزاری*/}
      {/*        مبین سرمایه</p></div>*/}
      {/*    <div className="blockquote-footer ">‏17 دی 1399</div>*/}
      {/*</div>*/}

      <div className={styles.sectionNews}>
        <div className="container text-right">
          <div className="mb-5 text-center">
            <h3 className="d-flex flex-column justify-content-center align-items-center">
              اخبار و رویداد مبین سرمایه
              <LineOrange />
            </h3>
          </div>
          <Slider {...settings}>
            <div>
              <div className="mb-3  p-2">
                <img
                  src={"/asset/images/homeImage/55555555.png"}
                  className="img-fluid mb-3"
                  alt=""
                />
                <p>دیدار مدیرعامل بانک ملی با مدیرعامل کارگزاری مبین سرمایه</p>
                <p className="blockquote-footer ">‏17 دی 1399</p>
              </div>
            </div>
            <div className="mb-3 p-2">
              <img
                src={"/asset/images/homeImage/980328-5.png"}
                alt=""
                className="img-fluid mb-3"
              />
              <p>دیدار مدیرعامل بانک ملی با مدیرعامل کارگزاری مبین سرمایه</p>
              <p className="blockquote-footer ">‏17 دی 1399</p>
            </div>

            <div className="mb-3 text-right p-2">
              <img
                src={"/asset/images/homeImage/photo_2019-11-04_10-06-45.png"}
                alt=""
                className="img-fluid mb-3"
              />
              <p>دیدار مدیرعامل بانک ملی با مدیرعامل کارگزاری مبین سرمایه</p>
              <p className="blockquote-footer ">‏17 دی 1399</p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
