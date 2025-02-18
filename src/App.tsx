import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/kanbas"/>}/>
          <Route path="/Labs/*" element={<Labs/>}/>
          <Route path="/kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello" element={<HelloWorld/>}/>
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;