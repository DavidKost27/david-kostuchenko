import * as React from "react";
import "./styles.scss";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useInView } from "react-intersection-observer";

// Components
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const [heroSectionRef, heroSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: "-150px",
  });
  const [projectsSectionRef, projectsSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: isMobile ? "-180px" : "-300px",
  });
  const [resumeSectionRef, resumeSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: isMobile ? "-180px" : "-300px",
  });
  const [contactSectionRef, contactSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: isMobile ? "-180px" : "-300px",
  });

  return (
    <main className="main-app">
      <div className="main-app__container">
        <div className="main-app__container__hero-wrapper" ref={heroSectionRef}>
          <title>Home Page</title>
          <h1>David Kostuchenko</h1>
          <h2>Full-Stack Developer</h2>

          <InfoCard />
        </div>

        <NavBar
          heroSectionInView={heroSectionInView}
          projectsSectionInView={projectsSectionInView}
          resumeSectionInView={resumeSectionInView}
          contactSectionInView={contactSectionInView}
        />

        <Projects projectsSectionRef={projectsSectionRef} />

        <Resume resumeSectionRef={resumeSectionRef} />

        <Contact contactSectionRef={contactSectionRef} />

        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
