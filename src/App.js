/** @format */

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Header from "./components/header";
import HeaderFirst from "./components/headerFirst";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className='App'>
      <HeaderFirst />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
