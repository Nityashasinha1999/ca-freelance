/** @format */

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Header from "./components/header";
import HeaderFirst from "./components/headerFirst";
import Home from "./pages/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./pages/gallery";
import Works from "./pages/works";
import Form from "./pages/form";
import ContactUs from "./pages/contactUs";

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
            <Route path='/work' exact component={Works}></Route>
            <Route path='/gallery' exact component={Gallery}></Route>
            <Route path='/contact-us' exact component={ContactUs}></Route>
            <Route
              path='/Security guard - Banking and non banking corporates
                    companies and government agencies'
              exact
              component={Form}></Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
