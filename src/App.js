import './App.css';
import Bar from './Bar/Bar';
import ChatArea from './chatArea/ChatArea';
import Join from './Join/Join'
import Type from './Type/Type';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="background">
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={ChatArea} />
      </Router>
      </div>
    </div>
  );
}

export default App;
