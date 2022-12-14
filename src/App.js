import "./App.css";
import "./components/Sidebar"; //1
import "./components/Reviews"; //2
import "./components/Average"; //3
import "./components/Sentiment"; //4
import "./components/Website"; //5
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import Average from "./components/Average";
import Sentiment from "./components/Sentiment";
import Website from "./components/Website";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
      <div className="topBar">
      <Reviews />
      <Average />
      <Sentiment />
      </div>
      <div className="bottomBar">
      <Website />
      </div>
      </div>
    </div>
  );
}

export default App;


//import logo from "./logo.svg";
/*import "./App.css";
import "./components/Sidebar"; //1
import "./components/Reviews"; //2
import "./components/Average"; //3
import "./components/Sentiment"; //4
import "./components/Website"; //5
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import Average from "./components/Average";
import Sentiment from "./components/Sentiment";
import Website from "./components/Website";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
      <div className="topBar">
      <Reviews />
      <Average />
      <Sentiment />
      </div>
      <div className="bottomBar">
      <Website />
      </div>
      </div>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="wrapper">
      <div className="Sidebar">Sidebar</div>
      <div className="Reviews">Reviews</div>
      <div className="Average">Average</div>
      <div className="Sentiment">Sentiment</div>
      <div className="Website">Website</div>
    </div>
  );
}

export default App;*/