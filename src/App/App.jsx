import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="h-screen flex items-center justify-between">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
