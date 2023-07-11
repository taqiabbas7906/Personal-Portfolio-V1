import PortfolioItem from "./PortfolioItem";
import { projects } from "../data";
import Cta from "./Cta";
import "./portfoliogrid.scss";

const PortfolioGrid = (props) => {
  return (
    <>
      <div className="portfolioGrid">
        {projects.map(function ({ id, name, tech, img, github, link }, index) {
          while (index < props.number) {
            return (
              <PortfolioItem
                key={id}
                id={id}
                name={name}
                tech={tech}
                img={img}
                githubLink={github}
                src={link}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="portBtn">{props.btn && <Cta id={3} open="self" />}</div>
    </>
  );
};

export default PortfolioGrid;
