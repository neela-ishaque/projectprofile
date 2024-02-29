// ThemeSwitcher.jsx
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store";

// Define a styled component for the theme switcher button


function ThemeSwitcher() {
    // Get the current theme from the Redux store
    const theme = useSelector((state) => state.theme);
    // Get the dispatch function from the Redux store
    const dispatch = useDispatch();

    return (
        // Render the theme switcher button with the theme class
        <button id="btn-mode" className={`${theme}-theme`} onClick={() => dispatch(toggleTheme())}>
            🌙
        </button>
    );
}

export default ThemeSwitcher;
