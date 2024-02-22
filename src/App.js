import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Services from "./component/services/Services";
import Home from "./component/home/Home";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from "./data/data"
import {todoList, movieApp} from "./data/Projects"

import Footer from "./component/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home data={data} />
      <Services data={data} />
      <Portfolio todoList={todoList}  movieApp={movieApp}/>
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
