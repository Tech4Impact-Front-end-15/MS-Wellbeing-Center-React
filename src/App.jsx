import Header from "./components/Header";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import ListBlog from "./pages/Blog";
import Footer from "./components/Footer";
import DetailBlog from "./pages/blog/detail";
import Team from "./pages/Team";
import Member from "./pages/Team";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Header */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<ListBlog />}></Route>
        <Route path="/blog/:id" element={<DetailBlog />}></Route>
        <Route path="/team" element={<Member />}></Route>
      </Routes>
      {/* Routes */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default App;
