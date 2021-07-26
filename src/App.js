import './assets/css/style.css';
import Header from './components/header';
import HeaderFirst from './components/headerFirst';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <HeaderFirst/>
  <Header/>
  <Home/>
    </div>
  );
}

export default App;
