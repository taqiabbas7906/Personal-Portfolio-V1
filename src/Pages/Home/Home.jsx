import Hero from "../../Components/Hero";
import SkillSet from "../../Components/SkillSet";
import About from "../../Components/About";
import Portfolio from "../../Components/Portfolio";
import Contact from "../../Components/Contact";


const Home = () => {
  return (
    <>
      <Hero />
      <SkillSet />
      <About/>
      <Portfolio number={2} btn ={true} />
      <Contact/>
    </>
  );
};

export default Home;
