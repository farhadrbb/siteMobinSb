import "./App.css";
import { Account } from "./components/pages/account/Accounts";
import MainLayout from "./components/layouts/MainLayout";
import { Switch, Route } from "react-router-dom";
import { Faq } from "./components/pages/faq/Faq";
import { Home } from "./components/pages/home/Home";
import { Shoab } from "./components/pages/shoab/Shoab";
import { ContactUs } from "./components/pages/contactUS/ContactUs";
import { BourseEnerzhy } from "./components/pages/bourseEnerzhy/BourseEnerzhy";
import { Derivative } from "./components/pages/Derivative/Derivative";
import { Merchandise } from "./components/pages/merchandise/Merchandise";
import { Securities } from "./components/pages/securities/Securities";
import { About } from "./components/pages/about/About";
import { Fund } from "./components/pages/fund/Fund";
import { WorkWithUs } from "./components/pages/WorkWithUs/WorkWithUs";
import { HamrahTrader } from "./components/pages/hamrahTrader/HamrahTrader";
import { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router";
// import  Recaptcha from "react-recaptcha"
import InvestmentFund from "./components/pages/InvestmentFund/InvestmentFund";
import ErrorPage from "./components/pages/404/ErrorPage";
import { TermsAndConditions } from "./components/pages/TermsAndConditions/TermsAndConditions";

function App() {
  const [flag, setFlag] = useState(null);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Switch>
        <Route path={"/"}>
          <MainLayout>
            <Switch>
              <Route path={"/faq"} component={Faq} />
              <Route path={"/hamrah"} component={HamrahTrader} />
              <Route path={"/workwithus"} component={WorkWithUs} />
              <Route path={"/fund"} component={Fund} />
              <Route path={"/investmentFund"} component={InvestmentFund} />
              <Route path={"/about"} component={About} />
              <Route path={"/securities"} component={Securities} />
              <Route path={"/merchandise"} component={Merchandise} />
              <Route path={"/derivative"} component={Derivative} />
              <Route path={"/bourseEnerzhy"} component={BourseEnerzhy} />
              <Route path={"/contactus"} component={ContactUs} />
              <Route
                path={"/TermsAndConditions"}
                component={TermsAndConditions}
              />

              <Route
                path={"/account"}
                render={() => <Account flag={flag} setFlag={setFlag} />}
              />
              <Route path={"/shoab"} component={Shoab} />
              <Route exact path={"/"} component={Home} />
              <Route path={"/error"} component={ErrorPage} />
              <Redirect path={"*"} to="/error" />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </>
  );
}

export default App;
