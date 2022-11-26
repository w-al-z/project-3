import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import Card from "./Components/Card";
import About from "./Components/About";
import Subcard from "./Components/Subcard";
import List from "./Components/List";
import Form from "./Components/Form";
import Why from "./Components/Why";
import Subform from "./Components/Subform";
import Graph from "./Components/Graph";
import Number from "./Components/Number";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import File from "./Components/File";
function App() {
  return (
    <div className="App">
      <Main />
      <Card />
      <About />
      <Subcard />
      <List />
      <Form />
      <Why />
      <Subform />
      <Graph />
      <Number />
      <Article />
      <File />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
