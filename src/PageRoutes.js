import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchBar />}></Route>
    </Routes>
  );
};

export default PageRoutes;
