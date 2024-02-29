import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../themeSlice';


const NavBar = () => {
    const ownName = "Yasmin Ishaque/"

    const dispatch = useDispatch();
    // const theme = useSelector((state) => state.theme);

    const modeButton = document.getElementById("btn-mode");

    return (

        <div className="header-area">
            <div className="header__container">
                <span className="logo">{ownName}</span>

                <nav className="navbar">

                    <NavLink className="nav__link" to="/">Home</NavLink>
                    <NavLink className="nav__link" to="./Features">Features</NavLink>
                    <NavLink className="nav__link" to="/About">About</NavLink>
                    <NavLink className="nav__link" to="/Projects">Projects</NavLink>
                    <NavLink className="nav__link" to="/Contact">Contact</NavLink>

                    <button id="btn-mode"
                        onClick={() => {
                            dispatch(toggleTheme());
                            document.body.classList.contains("light") ? modeButton.innerHTML = `☀️` : modeButton.innerHTML = `🌙`
                        }
                        }>🌙
                    </button>
                </nav>
            </div>
        </div>

    )
}

export default NavBar;

