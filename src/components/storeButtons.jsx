import { pictures } from "../assets/images";

const StoreButtons = () => {
    return ( <>
            <button className="w-fit"><img src={pictures.appStoreBtn} alt="" /></button>
            <button><img src={pictures.playStoreBtn} alt="" /></button>
    </> );
}
 
export default StoreButtons;