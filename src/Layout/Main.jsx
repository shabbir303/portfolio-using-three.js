import { Outlet } from "react-router-dom";
import Navbar from "../Menubar/Navbar";


const Main = () => {
    return (
        <div className="lg: max-w-[1400px] mx-auto mt-[30px]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;