import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/Logo.svg";

const Header = ({ searchText, setSearchText, handleSearch }) => {
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" />
            </div>
            <div className="search">
                <input className="search-input" type="text" value={searchText} onChange={handleChange} placeholder="Search" />
                <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
            </div>
        </header>
    )
}

export default Header