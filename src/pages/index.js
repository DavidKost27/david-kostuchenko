import * as React from "react";
import "./styles.scss";

import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  return (
    <main className="main-app">
      <div className="main-app__container">
        <title>Home Page</title>
        <h1>David Kostuchenko</h1>
        <h2>Full-Stack Developer</h2>

        <InfoCard />

        <NavBar />
      </div>
    </main>
  );
};

export default IndexPage;
