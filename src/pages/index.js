import * as React from "react";
import "./styles.scss";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useInView } from "react-intersection-observer";

// Components
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const IndexPage = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  return (
    <main className="main-app">
      <div className="main-app__container">
        <title>Home Page</title>
        <h1>David Kostuchenko</h1>
        <h2>Full-Stack Developer</h2>

        <InfoCard />

        <NavBar />

        <Projects />
      </div>
    </main>
  );
};

export default IndexPage;
