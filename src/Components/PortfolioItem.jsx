import "./portfolioItem.scss";
import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import imgFilter from "../Images/img filter.svg";

const PortfolioItem = (props) => {
  return (
    <div className={`portfolioItem`}>
      <img src={imgFilter} alt="filter" className="itemFilter" />
      <div className="itemInfo">
        <a
          rel="noreferrer"
          target="_blank"
          className="click ff-neutral fs-about-text text-primary-600"
          href={props.src}
        >
          Click To Open
        </a>
        <h5 className="text-neutral-100 ff-primary fs-secondary-heading-text">
          {props.name}
        </h5>
        <div className="itemLinks">
          <span className="text-neutral-100 fs-about-text ff-neutral">
            {props.tech}
          </span>
          <div>
            <a rel="noreferrer" target="_blank" href={props.src}>
              <LuExternalLink />
            </a>
            <a target="_blank" rel="noreferrer" href={props.githubLink}>
              <LuGithub />
            </a>
          </div>
        </div>
      </div>
      <img src={props.img} alt="Project" className="itemImage" />
    </div>
  );
};

export default PortfolioItem;
