import "./App.css";
import Menu from "./components/menu";
import Message from "./components/foundMessage";
import History from "./components/history";

function App() {
  return (
    /*
    <div className="main_page">
      <Menu />
    </div>
    
    <div className="secondary_page">
      <Message />
    </div>
    */
    <div className="secondary_page">
      <History />
    </div>
  );
}

export default App;
