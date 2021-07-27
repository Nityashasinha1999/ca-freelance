/** @format */

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Header from "./components/header";
import HeaderFirst from "./components/headerFirst";
import Home from "./pages/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./pages/gallery";

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
            <Route path='/gallery' exact component={Gallery}></Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
