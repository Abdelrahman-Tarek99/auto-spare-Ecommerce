import React from "react";
// import { useSelector } from "react-redux";
import HeroSection from "../Home/heroSection/HeroSection";
import Options from "../Home/options/Options";
import TopPicks from "../Home/topPicks/TopPicks";
import Poster from "../Home/poster/Poster";
import Blogs from "../Home/blogs/Blogs";
import Instagram from "../Home/instgram/Instagram";
import "../../App.css";

function Home() {
  // const ctx = useContext(AuthContext);
  // const email = useSelector((state) => state.auth.email);
  // const password = useSelector((state) => state.auth.password);
  // const token = useSelector((state) => state.auth.token);
  return (
    <main>
      <HeroSection />
      <Options />
      <TopPicks />
      <Poster />
      <Blogs />
      <Instagram />
    </main>
  );
}

export default Home;
