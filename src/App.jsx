import { Resume } from "./components/cv/resume";
import { Hero } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";

const App = () => {
  return (
    <div className="App-main">
      <Hero />
      <Portfolio />
      <Resume />
    </div>
  );
};

export default App;
