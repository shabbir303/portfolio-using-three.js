import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold blue-gradient_text  shadow-inner shadow-teal-500 w-[50px] text-center">SH</h1>
            <div className="flex gap-10 font-semibold">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/project">Project</NavLink>
            </div>
        </div>
    );
};

export default Navbar;