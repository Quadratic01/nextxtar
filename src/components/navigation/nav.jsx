import { logos } from "../../assets/images";
import Button from "../buttons/button";

const Nav = () => {
    return ( <div className="w-full flex items-center justify-between px-7 py-3 absolute top-0 left-0 right-0">
        <div className="ml-2">
            <img src={logos.logo} alt="" />
        </div>
        <div className="flex gap-7 items-center">
            <a className="text-white text-md font-semibold" href="#">Login</a>
            <Button variant="secondary">Register</Button>
            <Button>Discover Music</Button>
        </div>
    </div> );
}
 
export default Nav;