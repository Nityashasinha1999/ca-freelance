/** @format */

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Header from "./components/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderFirst from "./components/headerFirst";
import Home from "./pages/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./pages/gallery";
import Works from "./pages/works";
import Form from "./pages/form";
import ContactUs from "./pages/contactUs";
import Calling from "./components/forms/calling";
import Collection from "./components/forms/collection";
import financialAdvisory from "./components/forms/financialAdvisory";
import LeadProvider from "./components/forms/leadProvider";
import Buisness from "./components/forms/onlineBusiness";
import Client from "./components/forms/onlineClient";
import OnlinePoster from "./components/forms/onlinePoster";
import StaffForm from "./components/forms/staffForm";
import Tangible from "./components/forms/tangible";
import TradeMark from "./components/forms/tradeMark";
import Vehicle from "./components/forms/vehicle";
import Government from "./components/forms/government";

function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderFirst />
        <Header />

        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/services' exact component={Works}></Route>
            <Route path='/gallery' exact component={Gallery}></Route>
            <Route path='/contact-us' exact component={ContactUs}></Route>
            <Route
              path='/Security-guard-Banking-and-non-banking-corporates
              companies-and-government-agencies'
              exact
              component={Form}></Route>
            <Route
              path='/Staff-recruitment-for-banking-and-non-banking-corporate-companies-and-government-agencies'
              exact
              component={StaffForm}></Route>

            <Route
              path='/Online-business-promotions-and-marketing'
              exact
              component={Buisness}></Route>
            <Route
              path='/Online-client-data-sourcing'
              exact
              component={Client}></Route>
            <Route
              path='/Online-poster-hording-advertisement-agency-to-banking-and-non-banking-corporates-companies-and-government-agencies'
              exact
              component={OnlinePoster}></Route>
            <Route path='/Lead-provider' exact component={LeadProvider}></Route>
            <Route path='/Calling' exact component={Calling}></Route>
            <Route
              path='/Collection-and-recovery'
              exact
              component={Collection}></Route>
            <Route
              path='/Financial-advisory-corporate-public-and-private-sector'
              exact
              component={financialAdvisory}></Route>
            <Route
              path='/Tangible-property-valuation-to-banking-and-nonbanking
              companies-and-government-agencies'
              exact
              component={Tangible}></Route>
            <Route
              path='/Trade-mark-patent-copyright-goodwill-valuation-services'
              exact
              component={TradeMark}></Route>
            <Route path='/Vehicle-valiuation' exact component={Vehicle}></Route>

            <Route
              path='/Government-or-private-work-contractor-and-job-work'
              exact
              component={Government}></Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
