import "./App.css";
import RobotList from "../RobotList/RobotList";

const App = () => {
  return (
    <div className="container">
      <header className="main-header">
        <h1>ROBOTS 🤖</h1>
        <span aria-label="Explore among a lot of robots">
          Ready to explore many robots?
        </span>
      </header>
      <RobotList />
    </div>
  );
};

export default App;
