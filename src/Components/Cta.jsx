import { Link } from "react-router-dom";
import { button } from "../data";
import "./cta.scss";

const Cta = (props) => {
  return (
    <button
      type="submit" className={`cta ${button[props.id].name} ${button[props.id].size} ${
        button[props.id].type
      }`}
    >
      <Link
        className={`ff-neutral fs-button  ${button[props.id].color}`}
        to={button[props.id].link}
        target={`_${props.open}`}
      >
        {button[props.id].name}
      </Link>
    </button>
  );
};

export default Cta;
