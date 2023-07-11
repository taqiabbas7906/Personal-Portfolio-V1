import "./notFound.scss"
import { Link } from "react-router-dom"
import BlackHole from "../../Images/blackHole.avif"


const NotFound = () => {
  return (
    <div className='notFound | bg-primary-800'>
    <div className="notFoundContainer | container fs-heading ff-primary text-primary-600">
       <div className="heading"> 4 <img src={BlackHole} alt="" /> 4</div>
       <p className="para | ff-neutral fs-about-text text-neutral-100 letterSpace">You didn't broke the Internet but we can't find the page that you are looking for </p>
       <button
      type="submit" className={`cta Home fill`}
    >
      <Link
        className={`ff-neutral fs-button`}
        to="/"
      >
        Home
      </Link>
    </button>
    </div>
    </div>
  )
}

export default NotFound