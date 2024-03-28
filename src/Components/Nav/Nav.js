import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./Nav.scss";

const Nav = () => {
    return (
        <nav>
            <div>
                Demos
                <FontAwesomeIcon icon={faChevronDown} />
                <div className="hover-box">
                    <p>Post Header <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Post Layout <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Share Buttons <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Gallery Post <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Video Post <FontAwesomeIcon icon={faChevronRight} /></p>
                </div>
            </div>
            <div>
                Post
                <FontAwesomeIcon icon={faChevronDown} />
                <div className="hover-box">
                    <p>Post Header <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Post Layout <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Share Buttons <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Gallery Post <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Video Post <FontAwesomeIcon icon={faChevronRight} /></p>
                </div>
            </div>
            <div>
                Features
                <FontAwesomeIcon icon={faChevronDown} />
                <div className="hover-box">
                    <p>Post Header <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Post Layout <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Share Buttons <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Gallery Post <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Video Post <FontAwesomeIcon icon={faChevronRight} /></p>
                </div>
            </div>
            <div>
                Categories
                <FontAwesomeIcon icon={faChevronDown} />
                <div className="hover-box">
                    <p>Post Header <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Post Layout <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Share Buttons <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Gallery Post <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Video Post <FontAwesomeIcon icon={faChevronRight} /></p>
                </div>
            </div>
            <div>
                Shop
                <FontAwesomeIcon icon={faChevronDown} />
                <div className="hover-box">
                    <p>Post Header <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Post Layout <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Share Buttons <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Gallery Post <FontAwesomeIcon icon={faChevronRight} /></p>
                    <p>Video Post <FontAwesomeIcon icon={faChevronRight} /></p>
                </div>
            </div>
            <div>Buy Now</div>
        </nav>
    )
}

export default Nav