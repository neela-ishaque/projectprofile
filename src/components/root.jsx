import { Outlet } from 'react-router-dom'
import NavBar from "./navigation";
import Footer from './footer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



const Root = () => {
    const theme = useSelector((state) => state.theme.value);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;