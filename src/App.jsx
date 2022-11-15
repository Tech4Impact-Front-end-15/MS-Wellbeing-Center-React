import { useState } from "react";
import ViewBlog from "./pages/ViewBlog";
import MentalHack from "./dir/img/MentalHack.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      <Navbar />
      <ViewBlog />
      <Footer />
    </div>
  );
}

export default App;
