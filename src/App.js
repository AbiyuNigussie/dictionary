import "./App.css";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import PageRoutes from "./PageRoutes";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
      {/* <SearchBar /> */}
    </div>
  );
};

export default App;
