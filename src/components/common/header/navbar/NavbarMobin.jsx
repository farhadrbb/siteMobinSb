import React, { useEffect, useState } from "react";
import styled from "../style.module.css";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "react-bootstrap-icons";
import classNames from "classnames";
import { NavItems } from "./NavItems";
import NavBar2 from "./Navbar2";

export const NavbarMobin = () => {
  const [click, setClick] = useState(false);
  const { pathname } = useLocation();
  const [dropDown, setDropDown] = useState();
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  // ("dropDown",dropDown)

  const hanldeClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    setClick(false);
  }, [pathname]);

  // const handleHover = () => {
  //   setFlag1(!flag1);
  // };

  const handelLink = () => {
    // push({
    //   pathname: "/shoab",
    // });
    setClick(false);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <nav className={classNames(styled.Navbar, "d-none d-lg-flex")}>
          <div
            className={classNames(
              "d-flex d-lg-none ml-3 align-items-center",
              styled.menuCollapse
            )}
            onClick={hanldeClick}
          >
            {click ? <X size={40} /> : <List size={40} />}
          </div>
          <div className={styled.menuLogo}>
            <Link to={"/"}>
              <img
                src={"/asset/images/Group1.png"}
                className="img-fluid"
                alt="alt"
              />
            </Link>
          </div>
          <div className=" d-none d-lg-flex">
            <ul className={classNames(styled.navMenu)}>
              <NavItems
                text={"معاملات"}
                id={1}
                item={item}
                dropDown={dropDown}
                setDropDown={setDropDown}
                flag={false}
              />
              <NavItems
                text={"سرمایه‌گذاری"}
                id={2}
                item={item2}
                dropDown={dropDown}
                setDropDown={setDropDown}
                flag={false}
              />
              <div
                className="d-flex align-items-center justify-content-center"
                onMouseEnter={() => setFlag1(true)}
                onMouseLeave={() => setFlag1(false)}
                style={{ padding: "20px 10px" }}
              >
                {" "}
                <a
                  href={"http://club.mobinsb.ir/"}
                  className={flag1 ? styled.btnMenu : null}
                  onClick={handelLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  باشگاه مشتریان
                </a>
              </div>
              <NavItems
                text={"آموزش"}
                id={4}
                item={item3}
                dropDown={dropDown}
                setDropDown={setDropDown}
                flag={true}
              />
              <NavItems
                text={"درباره ما"}
                id={5}
                item={item4}
                dropDown={dropDown}
                setDropDown={setDropDown}
                flag={false}
              />
              <div
                className="d-flex justify-content-center align-items-center"
                onMouseEnter={() => setFlag2(true)}
                onMouseLeave={() => setFlag2(false)}
                style={{ padding: "20px 10px" }}
              >
                <Link to={"/shoab"} className={flag2 ? styled.btnMenu : null}>
                  شعب و دفاتر
                </Link>
              </div>
              {/*<div*/}
              {/*  className="d-flex justify-content-center align-items-center"*/}
              {/*  onMouseEnter={() => setFlag3(true)}*/}
              {/*  onMouseLeave={() => setFlag3(false)}*/}
              {/*  style={{ padding: "20px 10px" }}*/}
              {/*>*/}
              {/*  <a*/}
              {/*    href={"http://www.old.mobinsb.ir"}*/}
              {/*    className={flag3 ? styled.btnMenu : null}*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*  >*/}
              {/*    نسخه قدیمی سایت*/}
              {/*  </a>*/}
              {/*</div>*/}
              <div
                className="d-flex justify-content-center align-items-center"
                onMouseEnter={() => setFlag5(true)}
                onMouseLeave={() => setFlag5(false)}
                style={{ padding: "20px 10px" }}
              >
                <Link
                  to={"/TermsAndConditions"}
                  className={flag5 ? styled.btnMenu : null}
                >
                  خدمات آنلاین و آفلاین
                </Link>
              </div>
            </ul>
          </div>
        </nav>

        <div className="d-flex d-lg-none">
          <NavBar2 flag4={flag4} setFlag4={setFlag4} />
        </div>

        <div>
          <button className={styled.btnNav}>
            <a rel="noreferrer" target="_blank" href="https://smart.mobinsb.ir">
              افتتاح حساب
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
let item = [
  {
    title: "شروع معامله‌گری",
    text: [
      {
        text: "افتتاح حساب",
        route: "https://smart.mobinsb.ir",
      },
      { text: "سوالات متداول", route: "/faq" },
    ],
  },
  {
    title: "ابزار و سامانه‌های معاملاتی",
    text: [
      {
        text: "سامانه معاملات آنلاین سهام",
        route: "https://online.mobinsb.ir/",
      },
      { text: "سامانه معاملات آفلاین سهام", route: "https://c.mobinsb.ir/" },
      {
        text: "سامانه معاملات آنلاین آتی",
        route: "https://coinonline.mobinsb.ir/",
      },
      { text: "سامانه سهام عدالت", route: " http://sahamedalat.mobinsb.ir/" },
      { text: "نرم‌افزار همراه تریدر", route: "hamrah" },
    ],
  },

  {
    title: "خدمات مبین‌سرمایه",
    text: [
      { text: "بورس اوراق بهادار", route: "securities" },
      { text: "بورس کالا", route: "merchandise" },
      { text: "بورس انرژی", route: "bourseEnerzhy" },
      { text: "بازار مشتقه", route: "derivative" },
    ],
  },
];
let item2 = [
  {
    title: "شروع سرمایه‌گذاری",
    text: [
      { text: "سرمایه‌گذاری در بورس", route: "fund" },
      { text: "سوالات متداول", route: "/faq" },
    ],
  },
  {
    title: "سرمایه‌گذاری غیرمستقیم",
    text: [{ text: "صندوق سرمایه‌گذاری", route: "/investmentFund" }],
  },
];
let item3 = [
  {
    title: "دوره های آموزشی",
    // text: [
    //   { text: "سرمایه‌گذاری در بورس", route: "/fund" },
    //   { text: "سوالات متداول", route: "/faq " },
    // ],
    text: [
      {
        text: "دوره های آموزشی",
        route: "https://club.mobinsb.ir/Course/Indexv",
      },
      // {
      //   text: "وبلاگ",
      //   route: "",
      // },
    ],
  },
];
let item4 = [
  {
    title: "درباره مبین‌سرمایه",
    text: [
      { text: "معرفی", route: "about" },
      { text: "شماره حساب‌ها", route: "/account" },
      // { text: "اخبار   ", route: "" },
    ],
  },
  {
    title: "تماس با ما ",
    text: [
      { text: "اطلاعات تماس", route: "contactus" },
      { text: "همکاری با ما", route: "/workwithus" },
    ],
  },
];
