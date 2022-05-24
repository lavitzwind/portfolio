import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <div>
      <Header />
      <ProjectList />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
