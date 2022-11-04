import { Route, Routes } from "react-router-dom";
import { Footer } from "./pageContainer/Footer/index.js";
import { Landing } from "./pageContainer/Landing/index.js";
import { Books } from "./pages/Books";
import { Codes } from "./pages/Codes";
import { ErrorPage } from "./pages/ErrorPage/index.js";
import Home from "./pages/Home";
import { Opinions } from "./pages/Opinions";
import { Others } from "./pages/Others";
import { Stories } from "./pages/Stories";

function App() {
  return (
    <div className="App">
      <Landing />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/opinions" element={<Opinions />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/others" element={<Others />} />
      </Routes>
      <Footer />
      {/* <Routes>
      </Routes> */}
    </div>
  );
}

export default App;
