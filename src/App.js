import logo from "./logo.svg";
import "./App.css";
import Navebar from "./component/Navebar";
import Main from "./component/Main";
import Solo from "./component/Solo";
import Self from "./component/Self";
import Image from "./component/Image";
import Controll from "./component/Controll";
import Box from "./component/Box";
import Futter from "./component/Futter";
import Contract from "./component/Contract";

function App() {
  return (
    <div>
      <Navebar />
      <Main />
      <Solo />
      <Self />
      <Image />
      <Controll />
      <Box />
      <Futter />
      <Contract />
    </div>
  );
}

export default App;
