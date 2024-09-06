import { logos } from "../assets/images";

const StoreButtons = () => {
    return ( <div className="flex gap-5">
            <div className="bg-black-100 rounded-md py-1 px-4 flex gap-3 text-white items-center border border-white">
                <div><img width={32} height={32} src={logos.apple} alt="" /></div>
                <div>
                    <span className="text-xs">Download on the</span>
                    <h4 className="text-xl font-medium">App store</h4>
                </div>
            </div>
            <div className="bg-black-100 rounded-md py-1 px-4 flex gap-3 text-white items-center border border-white">
                <div><img width={32} height={32} src={logos.apple} alt="" /></div>
                <div>
                    <span className="text-xs">Get it on</span>
                    <h4 className="text-xl font-medium">Google Play</h4>
                </div>
            </div>
    </div> );
}
 
export default StoreButtons;