import logo from "./logo.svg";
import "./App.css";

import Intro from "./components/intro";
import YoullGet from "./components/youllget";
import ForYou from "./components/foryou";
import Price from "./components/price";
import WhyAreWe from "./components/whyarewe";
import Features from "./components/features";
import Founder from "./components/founder";
import HowToStudy from "./components/howtostudy";
import FeedBacks from "./components/feedbacks";

function App() {
   return (
      <div className="full-page-background">
         <Intro />
         <YoullGet />
         <ForYou />
         <Price />
         <WhyAreWe />
         <Features />
         <Founder />
         <HowToStudy />
         <FeedBacks />
      </div>
   );
}

export default App;
