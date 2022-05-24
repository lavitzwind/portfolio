import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <div>
      <Header />
      <ProjectList />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
