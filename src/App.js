import logo from "./logo.svg";
import "./App.css";

import Intro from "./components/intro";
import YoullGet from "./components/youllget";
import ForYou from "./components/foryou";
import Price from "./components/price";
import WhyAreWe from "./components/whyarewe";

function App() {
   return (
      <div className="full-page-background">
         <Intro />
         <YoullGet />
         <ForYou />
         <Price />
         <WhyAreWe />
      </div>
   );
}

export default App;
