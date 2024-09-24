import logo from "./logo.svg";
import "./App.css";

import Intro from "./components/intro";
import YoullGet from "./components/youllget";

function App() {
   return (
      <div className="full-page-background">
         <Intro />
         <YoullGet />
      </div>
   );
}

export default App;
