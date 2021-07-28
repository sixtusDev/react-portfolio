// Import Statements
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Resume from "./components/resume";
import Project from "./components/project";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Project} />
      </Switch>
    </div>
  );
}

export default App;
