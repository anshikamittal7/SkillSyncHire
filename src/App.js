import { useState } from "react";

import Banner from "./components/Banner";
import Header, { HeaderPhone } from "./components/Header";
import Blog from "./components/Blog";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import Success from "./components/Success";



import "./styles/header.scss";
import "./styles/banner.scss";
import "./styles/blog.scss";
import "./styles/card.scss";
import "./styles/footer.scss"
import "./styles/success.scss";
import "./styles/mediaquery.scss";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Banner />
      <Blog />
      <Jobs />
      <Success />
      <Footer />
    </>
  );
}

export default App;
