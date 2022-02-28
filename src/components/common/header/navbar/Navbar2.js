// import React from "react";
// import styles from "./style.module.css";
// import classNames from "classnames";
//
// class NavBar2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sideBar: false,
//     };
//
//     this.handleSidebar = this.handleSidebar.bind(this);
//   }
//
//   handleSidebar() {
//     this.setState({
//       sideBar: !this.state.sideBar,
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <header className={styles.header}>
//           <div className={styles.navContainer}>
//             <span
//               className={styles.logo}
//               style={{ color: "#fff", fontStyle: "italic", fontWeight: "400" }}
//             >
//               React Navigation
//             </span>
//             <nav>
//               <ul
//                 className={styles.mainNav}
//                 style={
//                   this.state.sideBar ? { transform: "translateX(0)" } : null
//                 }
//               >
//                 <li>
//                   <a className={styles.mainNavLink} href="#">
//                     Dummy 1
//                   </a>
//                 </li>
//                 <li>
//                   <a className={styles.mainNavLink} href="#">
//                     Dummy 2
//                   </a>
//                 </li>
//                 <li>
//                   <a className={styles.mainNavLink} href="#">
//                     Dummy 4
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//             <button
//               onClick={this.handleSidebar}
//               // className={styles.navToggle`navToggle ${
//               //   this.state.sideBar ? "open" : null
//               // }`}
//               className={classNames(
//                 styles.navToggle,
//                 this.state.sideBar ? "open" : null
//               )}
//             >
//               <span />
//               <span />
//               <span />
//             </button>
//             <div
//               onClick={this.handleSidebar.bind(this)}
//               // className={styles.overlay`overlay ${
//               //   this.state.sideBar ? "open" : ""
//               // }`}
//               className={classNames(
//                 styles.overlay,
//                 this.state.sideBar ? "open" : ""
//               )}
//             />
//           </div>
//         </header>
//         <div className={styles.wrapper}></div>
//       </div>
//     );
//   }
// }
// export default NavBar2;

import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import classNames from "classnames";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "../style.module.css";

const Navbar2 = () => {
  const [state, setState] = useState({});
  const buttonRef = useRef();

  const handleClick = (e, id) => {
    e.stopPropagation();

    if (id === state.id) {
      setState({});
    } else {
      setState({ id: id });
    }
  };

  const handleClose = () => {
    setState({});
  };

  const handleRoute = (e) => {
    e.stopPropagation();
    buttonRef.current.click();
    setState({});
  };

  return (
    <>
      <nav
        className="navbar navbar-light bg-light fixed-top text-right p-0"
        style={{ minHeight: "6vh" }}
        onBlur={handleClose}
      >
        <div className="container-fluid">
          <button
            // className="navbar-toggler border-0"
            className={classNames(
              styles.iconHamburgeri,
              "navbar-toggler border-0"
            )}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={styled.menuLogo}>
            <Link to={"/"}>
              <img
                src={"/asset/images/Group1.png"}
                className="img-fluid"
                alt="alt"
                width={120}
              />
            </Link>
          </div>

          <div>
            <button className={styled.btnNav}>
              <a
                target="_blank"
                href="https://smart.mobinsb.ir"
                rel="noreferrer"
              >
                افتتاح حساب
              </a>
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                ref={buttonRef}
                onClick={handleClose}
              ></button>
              <div>
                <button className={styled.btnNav}>
                  <a
                    target="_blank"
                    href="https://smart.mobinsb.ir"
                    rel="noreferrer"
                  >
                    افتتاح حساب
                  </a>
                </button>
              </div>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="navbar-nav justify-content-end flex-grow-1 ">
                {/*<li className="nav-item">*/}
                {/*  <a className="nav-systemLink active" aria-current="page" href="#">*/}
                {/*    Home*/}
                {/*  </a>*/}
                {/*</li>*/}
                {item.map((itm, indexx) => (
                  <li
                    // className="nav-item dropdown"
                    className={classNames(
                      styles.itemParent,
                      "nav-item dropdown"
                    )}
                    onClick={(e) => handleClick(e, indexx)}
                    key={indexx}
                  >
                    {itm.sub ? (
                      <a
                        // className="nav-systemLink dropdown-toggle"
                        className={
                          // state.id === ind
                          classNames(
                            styles.subMenuParent,
                            "dropdown-toggle d-flex align-items-center justify-content-between nav-systemLink"
                          )
                        }
                        // style={state.id === ind && { color: "#ff5f00" }}
                        href={itm.route && itm.route}
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {itm.parent}
                        {itm.sub ? (
                          <div
                            className={
                              state.id === indexx ? styles.icon : styles.iconNot
                            }
                          >
                            <ChevronDown />{" "}
                          </div>
                        ) : null}
                      </a>
                    ) : itm.route.includes("http") ? (
                      <a
                        // className="nav-systemLink dropdown-toggle"
                        className={classNames(
                          styles.subMenuParent,
                          "dropdown-toggle d-flex align-items-center justify-content-between",
                          "nav-systemLink"
                        )}
                        href={itm.route && itm.route}
                        id="offcanvasNavbarDropdown"
                        role="button"
                        target="_blank"
                        onClick={handleRoute}
                        rel="noreferrer"

                        // data-bs-toggle="dropdown"
                        // aria-expanded="null"
                      >
                        {itm.parent}
                        {itm.sub ? <ChevronDown /> : null}
                      </a>
                    ) : (
                      <Link
                        // className="nav-systemLink dropdown-toggle"
                        className={classNames(
                          styles.subMenuParent,
                          "dropdown-toggle d-flex align-items-center justify-content-between",
                          "nav-systemLink"
                        )}
                        to={itm.route && itm.route}
                        id="offcanvasNavbarDropdown"
                        role="button"
                        onClick={handleRoute}

                        // data-bs-toggle="dropdown"
                        // aria-expanded="null"
                      >
                        {itm.parent}
                        {itm.sub ? <ChevronDown /> : null}
                      </Link>
                    )}

                    <ul
                      // className="dropdown-menu border-0 text-right"
                      className={classNames(
                        styles.subMenu,
                        "dropdown-menu border-0 text-right  px-3"
                      )}
                      aria-labelledby="offcanvasNavbarDropdown"
                    >
                      <li>
                        {itm.sub
                          ? itm.sub.map((item, index) => (
                              <div key={index}>
                                <a
                                  // className="dropdown-item disabled p-0 pr-2 mb-3 mt-4"
                                  className={
                                    item.route
                                      ? "dropdown-item  p-0 pr-2 mb-3 mt-4"
                                      : "dropdown-item disabled p-0 pr-2 mb-3 mt-4"
                                  }
                                  href={item.route && item.route}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {item.title}
                                </a>

                                <div className="d-flex flex-column">
                                  {item.text
                                    ? item.text.map((itm, ind) =>
                                        itm.route.includes("http") ? (
                                          <a
                                            className={styles.items}
                                            href={itm.route && itm.route}
                                            target="_blank"
                                            onClick={handleRoute}
                                            key={ind}
                                            rel="noreferrer"
                                          >
                                            <span className="ml-2"></span>
                                            {itm.text}
                                          </a>
                                        ) : (
                                          <Link
                                            className={styles.items}
                                            to={itm.route && itm.route}
                                            onClick={handleRoute}
                                            key={ind}
                                          >
                                            <span className="ml-2"></span>
                                            {itm.text}
                                          </Link>
                                        )
                                      )
                                    : null}
                                </div>
                                {/*{itm.sub.length &&*/}
                                {/*  itm.sub.length === index + 1 && <hr />}*/}
                                {/*<hr />*/}
                                {/*{itm.sub.length}*/}
                                {/*{console.log(*/}
                                {/*  "farzinzasf",*/}
                                {/*  itm.sub.length === index + 1*/}
                                {/*)}*/}
                                {/*)}*/}
                                {itm.sub.length !== index + 1 ? <hr /> : null}
                              </div>
                            ))
                          : null}
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
//
// let item = [
//   {
//     title: "شروع معامله‌گری",
//     text: [
//       {
//         text: "افتتاح حساب",
//         route: "http://club.mobinsb.com/User/Login?q=",
//       },
//       { text: "سوالات متداول", route: "/faq" },
//     ],
//   },
//   {
//     title: "ابزار و سامانه‌های معاملاتی",
//     text: [
//       {
//         text: "سامانه معاملات آنلاین سهام",
//         route: "https://online.mobinsb.com/",
//       },
//       { text: "سامانه معاملات آفلاین سهام", route: "https://c.mobinsb.com/" },
//       {
//         text: "سامانه معاملات آنلاین آتی",
//         route: "https://coinonline.mobinsb.com/",
//       },
//       { text: "سامانه سهام عدالت", route: " http://sahamedalat.mobinsb.com/" },
//       { text: "نرم‌افزار همراه تریدر", route: "hamrah" },
//     ],
//   },
//
//   {
//     title: "خدمات مبین‌سرمایه",
//     text: [
//       { text: "بورس اوراق بهادار", route: "securities" },
//       { text: "بورس کالا", route: "merchandise" },
//       { text: "بورس انرژی", route: "bourseEnerzhy" },
//       { text: "بازار مشتقه", route: "derivative" },
//     ],
//   },
// ];

let item = [
  // {
  //   title: "شروع معامله‌گری",
  //   text: [
  //     {
  //       text: "افتتاح حساب",
  //       route: "http://club.mobinsb.com/User/Login?q=",
  //     },
  //     { text: "سوالات متداول", route: "/faq" },
  //   ],
  // },
  // {
  //   title: "ابزار و سامانه‌های معاملاتی",
  //   text: [
  //     {
  //       text: "سامانه معاملات آنلاین سهام",
  //       route: "https://online.mobinsb.com/",
  //     },
  //     { text: "سامانه معاملات آفلاین سهام", route: "https://c.mobinsb.com/" },
  //     {
  //       text: "سامانه معاملات آنلاین آتی",
  //       route: "https://coinonline.mobinsb.com/",
  //     },
  //     { text: "سامانه سهام عدالت", route: " http://sahamedalat.mobinsb.com/" },
  //     { text: "نرم‌افزار همراه تریدر", route: "hamrah" },
  //   ],
  // },
  //
  // {
  //   title: "خدمات مبین‌سرمایه",
  //   text: [
  //     { text: "بورس اوراق بهادار", route: "securities" },
  //     { text: "بورس کالا", route: "merchandise" },
  //     { text: "بورس انرژی", route: "bourseEnerzhy" },
  //     { text: "بازار مشتقه", route: "derivative" },
  //   ],
  // },

  {
    parent: "معاملات",
    sub: [
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
          {
            text: "سامانه معاملات آفلاین سهام",
            route: "https://c.mobinsb.ir/",
          },
          {
            text: "سامانه معاملات آنلاین آتی",
            route: "https://coinonline.mobinsb.ir/",
          },
          {
            text: "سامانه سهام عدالت",
            route: " http://sahamedalat.mobinsb.ir/",
          },
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
    ],
  },

  {
    parent: "سرمایه گذاری",
    sub: [
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
    ],
  },
  { parent: "باشگاه مشتریان", route: "http://club.mobinsb.ir/" },
  {
    parent: "آموزش",
    sub: [
      {
        title: "دوره‌های آموزشی",
        route: "https://club.mobinsb.ir/Course/Indexv",
      },
    ],
  },
  {
    parent: "درباره ما",
    sub: [
      {
        title: "درباره مبین‌سرمایه",
        text: [
          { text: "معرفی", route: "/about" },
          { text: "شماره حساب‌ها", route: "/account" },
          // { text: "اخبار   ", route: "" },
        ],
      },
      {
        title: "تماس با ما ",
        text: [
          { text: "اطلاعات تماس", route: "/contactus" },
          { text: "همکاری با ما", route: "/workwithus" },
        ],
      },
    ],
  },
  { parent: "شعب و دفاتر", route: "/shoab" },
  { parent: "خدمات آنلاین و آفلاین", route: "/TermsAndConditions" },
];

//
// import { Button } from "react-bootstrap";
// import { useState } from "react";
//
// function OffCanvasExample({ name, ...props }) {
//   const [show, setShow] = useState(false);
//
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow} className="me-2">
//         {name}
//       </Button>
//       <Offcanvas show={show} onHide={handleClose} {...props}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }
//
// function Example() {
//   return (
//     <>
//       {["start", "end", "top", "bottom"].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }
